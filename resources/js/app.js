require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

import $ from 'jquery';
$(document).ready(function () {
    let background = $('#background').val();
    let list =  $('#list').val();
    let depth =  $('#depth').val();

    if(background){
        if(background.indexOf('http') !== -1){
            $('body').css('backgroundImage', 'url('+background+')' );
            $('body').css('background-repeat', 'no-repeat' );
            $('body').css('background-size', 'cover' );
        }else{
            background = background.replace(/;/g, ",");
            $('body').css("background-color", "rgb"+background+"");
        }
    }

    let count = 1;
    function recursive_parse( result ) {
        let html;
        if(count == 1){
            html = '<ul class="list">';
        }else {
            if( count <= depth ){
                html = '<ul class="sub-list open">';
            }else{
                html = '<ul class="sub-list">';
            }
        }

        for (let k in result) {
            if(typeof result[k] === 'object'){
                count++;
                html += '<li>';
                html += k ;
                html += recursive_parse( result[k] );
                html += '</li>';
                count--;
            }else{
                html += '<li>' + result[k]  + '</li>';
            }
        }
        html = html + '</ul>';
        return html;
    }

    $(document).on('click','.list li', function(e){
        e.stopPropagation();
        let subList = $(this).children('.sub-list');
        if (subList.hasClass('open')) {
            $(this).find('.sub-list').removeClass('open');
        } else {
            subList.addClass('open');
        }
    });

    $("#navcontainer").html(recursive_parse(JSON.parse(list)));
});

