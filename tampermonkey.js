// ==UserScript==
// @name         Google Analytics Buttons
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Google Analytics for super users
// @author       Conversionista!
// @match        https://analytics.google.com/*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// @updateURL https://openuserjs.org/meta/conversionista/Google_Analytics_Buttons.meta.js
// ==/UserScript==
// ==OpenUserJS==
// @author conversionista
// @collaborator simondahla
// ==/OpenUserJS==


(function() {
    'use strict';

    // Your code here...
    

    // ***** GA Buttons *****


    function clickButtons(nr, btn) {
        console.log("start click on  " + nr + "  dropdown");

        function clickDim(nr) {
            $('div[class*="ID-condition-"][class*="GASJ"] div button[class*="_GAhr"]')[nr].click();
            console.log("start click on " + btn);
        }

        function clickMatch(nr) {

        }



        if (btn === "Page") {
            clickDim(nr);
            setTimeout(function() {
                 $('div[class*="ID-concept"][class*="request_uri"]')[2].click();
                 console.log($('div[class*="ID-concept"][class*="request_uri"]'))
            }, 50);


        }

        if (btn === "Mobile") {
            clickDim(nr);
            $("div.ID-concept-8-17").click();
            setTimeout(function() {
                $('div[class*="condition"] input._GApRb').eq(nr).val("mobile");
            }, 50);

        }
        if (btn === "Desktop") {
            clickDim(nr);
            $("div.ID-concept-8-17").click();
            setTimeout(function() {
                $('div[class*="condition"] input._GApRb').eq(nr).val("desktop");
            }, 50);

        }



        return false;

    }




    // Append Buttons 
    function addButtonListener() {
        $('.Page').click(function() {
            var nr = $('.Page').index(this);
            console.log(nr);
            var btn = "Page";
            console.log(btn);
            clickButtons(nr, btn);
            return false;
        });
        $('.Mobile').click(function() {
            var nr = $('.Mobile').index(this);
            console.log(nr);
            var btn = "Mobile";
            console.log(btn);
            clickButtons(nr, btn);
            return false;
        });
        $('.Desktop').click(function() {
            var nr = $('.Desktop').index(this);
            console.log(nr);
            var btn = "Desktop";
            console.log(btn);
            clickButtons(nr, btn);
            return false;
        });



        console.log("added Buttons Listener");

    }

    function removeButtons() {
        $('.butn').remove();

    }

    function appendButtons() {
        if ($(".Page").length < 1) {

            removeButtons();
            console.log("removed all buttons");
            $('[class^="ID-condition-"]').append('<a class="butn Page" href="#" style="margin-right: 10px;margin-top: 5px;">Page</a>');
            $('[class^="ID-condition-"]').append('<a class="butn Mobile" href="#" style="margin-right: 10px;margin-top: 5px;">Mobile</a>');
            $('[class^="ID-condition-"]').append('<a class="butn Desktop" href="#" style="margin-right: 10px;margin-top: 5px;">Desktop</a>');
         


            console.log("appended  buttons");
            addButtonListener();
            addFilterListener();
        }
    }


    function addFilterListener() {
        $('.ACTION-add').click(function() {
            removeButtons();
            console.log("removed Buttons");
            setTimeout(function() {
                appendButtons();
                console.log("appended Buttons");
            }, 20);
        });
        $('.ACTION-addStep').click(function() {
            removeButtons();
            console.log("removed Buttons");
            setTimeout(function() {
                appendButtons();
                console.log("appended Buttons");
            }, 20);
        });
        $('.ACTION-remove').click(function() {
            removeButtons();
            console.log("removed Buttons");
            setTimeout(function() {
                appendButtons();
                console.log("appended Buttons");
            }, 20);
        });
        $('.ACTION-add-or').click(function() {
            removeButtons();
            console.log("removed Buttons");
            setTimeout(function() {
                appendButtons();
                console.log("appended Buttons");
            }, 20);
        });
        $('.ACTION-add-and').click(function() {
            removeButtons();
            console.log("removed Buttons");
            setTimeout(function() {
                appendButtons();
                console.log("appended Buttons");
            }, 20);
        });
    }


    setTimeout(function() {
        appendButtons();
    }, 3000);


    setInterval(function() {
        if (document.URL.indexOf("usegmode%3DCREATE/") >= 0) {
            // if URL matches segment editor, append Buttons button
            //console.log("tjabba");
            appendButtons();
        }
        if (document.URL.indexOf("usegmode%3DCOPY") >= 0) {
            // if URL matches segment editor, append Buttons button
            //console.log("tjabba");
            appendButtons();
        }
        if (document.URL.indexOf("usegmode%3DEDIT") >= 0) {
            // if URL matches segment editor, append Buttons button
            //console.log("tjabba");
            appendButtons();
        }




    }, 2000);

    //***** Copy sgement name *****
 function copySegmentName() {
        console.log("inside copySegmentName");

        setTimeout(function() {
            if ($(".ID-segmentName").val().length < 1) {
                var segName;
                segName = $("._GAfi.ID-segmentHeaderData-" + document.URL.match('cusegid.*reportHeader')[0].slice(10, 36) + " ._GAum div:nth-child(1)").text();

                $(".ID-segmentName").val(segName);

                console.log("copied sgment name");
            }
        }, 500);
    }


    setInterval(function() {
        if (document.URL.indexOf("3DCOPY") >= 0) {
            copySegmentName();
        }

    }, 2000);

        //console.log("big foot exists");
})();
