$(function () {
    var status = true;
    $("#toggle").click(function () {
        $('#menu_collapse').collapse('toggle');
        if(status == true) {
            //document.getElementById("bodyright").style.width= "1024px";
            setTimeout(function() {
                document.getElementById("bodyright").style.minHeight = "100%";
                document.getElementById("bodyright").style.minWidth = "100%";
                $("#masterGrid").setGridWidth($("#form_body").width() - 20);
            }, 330);
            
            status = false;
        } else {
            //document.getElementById("bodyright").style.width= "704px";
            document.getElementById("bodyright").style.minHeight = "0";
            document.getElementById("bodyright").style.minWidth = "0";
            setTimeout(function() {
                $("#masterGrid").setGridWidth($("#form_body").width() - 20);
            }, 330);
            status = true;
        }
            //document.getElementById("bodyright").style.width="1300px"; //$(window).width(); 
    });
    $('#menu_collapse').collapse( {
        toggle : true
    });
    $("#demo1").navgoco( {
        caret : '<span class="caret"></span>', accordion : false, openClass : 'open', save : true, cookie :  {
            name : 'navgoco', expires : false, path : '/'
        },
        slide :  {
            duration : 400, easing : 'swing'
        }
    });
    $("#collapseAll").click(function (e) {
        e.preventDefault();
        $("#demo1").navgoco('toggle', false);
    });
    $("#expandAll").click(function (e) {
        e.preventDefault();
        $("#demo1").navgoco('toggle', true);
        // Show|Hide sub-menus with specific indexes
        // It will also open parent sub-menus since v0.1.2			
        //$("#demo1").navgoco('toggle', true, 1, 2, 4);
    });

});


function logout()
{
   alert('logout');
}