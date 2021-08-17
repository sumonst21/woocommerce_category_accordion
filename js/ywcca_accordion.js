jQuery(function($){



   var widget = $('.widget_product_categories'),
       ul_cont  =   widget.find( 'ul.product-categories' ),
       highlight_cat    =   ul_cont.data( 'highlight_curr_cat' )=='on',
       closed_accordion = ul_cont.data('show_collapse') == 'off',
       main_ul = widget.find('ul');
    if ( main_ul.length ) {
        var dropdown_widget_nav = function () {

            main_ul.find('li').each(function () {

                var main = $(this),
                    link = main.find('> a'),
                    ul = main.find('> ul.children');

                if( main.hasClass('active')) {
                  main.removeClass('active');
                }
                if (ul.length) {

                    //init widget

                    //if( closed_accordion )
                        main.removeClass('opened').addClass('closed');

                    if (main.hasClass('closed')) {
                        ul.hide();

                        link.before('<i class="fa fa-angle-right" aria-hidden="true"></i>');
                    }
                    else if (main.hasClass('opened')) {
                        link.before('<i class="fa fa-angle-down" aria-hidden="true"></i>');
                    }
                    else {
                        main.addClass('opened');
                        link.before('<i class="fa fa-angle-down" aria-hidden="true"></i>');
                    }

                    // on click
                    main.find('i').on('click', function(e) {

                        ul.slideToggle('slow');

                        if (main.hasClass('closed')) {
                            main.removeClass('closed').addClass('opened');
                            main.find('>i').removeClass('fa fa-angle-right').addClass('fa fa-angle-down');
                        }
                        else {
                            main.removeClass('opened').addClass('closed');
                            main.find('>i').removeClass('fa fa-angle-down').addClass('fa fa-angle-right');
                        }

                        e.stopImmediatePropagation();
                    });

                    main.on('click', function(e){

                        if( $(e.target).filter('a').length)
                         return ;

                        ul.slideToggle('slow');

                        if (main.hasClass('closed')) {
                            main.removeClass('closed').addClass('opened');
                            main.find('i').removeClass('fa fa-angle-right').addClass('fa fa-angle-down');
                        }
                        else {
                            main.removeClass('opened').addClass('closed');
                            main.find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-right');
                        }

                        e.stopImmediatePropagation();
                    });
                }

                if( main.hasClass('current-cat') && highlight_cat ){
                    link.addClass('highlight_cat');
                    
                    //link.addClass('opened');
                    //link.before('<i class="fa fa-angle-down" aria-hidden="true"></i>');
                }
                
                $( ".current-cat" ).removeClass('closed').addClass('opened');
                
                if( main.hasClass('current-cat') ){
                    main.find('i').removeClass('fa fa-angle-right').addClass('fa fa-angle-down');
                    ul.show();
                }
                //
                
            });
        };
        dropdown_widget_nav();
    }
    
    



});
