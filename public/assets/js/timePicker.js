(function($) {
    
    jQuery.ptTimeSelect = {};
    jQuery.ptTimeSelect.version = "__BUILD_VERSION_NUMBER__";
    
    jQuery.ptTimeSelect.options = {
        containerClass: undefined,
        containerWidth: '22em',
        hoursLabel:     'Hour',
        minutesLabel:   'Minutes',
        setButtonLabel: 'Set',
        popupImage:     undefined,
        onFocusDisplay: true,
        zIndex:         10,
        onBeforeShow:   undefined,
        onClose:        undefined
    };

    /**
     * Closes the timePicker popup if user is no longer focused on the
     * input field or the timepicker
     * 
     * @private
     * @param {jQueryEvent} ev -    Event passed in by jQuery
     * @return {undefined}
     */
    jQuery.ptTimeSelect._doCheckMouseClick = function(ev) {
        if (!$("#ptTimeSelectCntr:visible").length) {
            return;
        }
        if (!jQuery(ev.target).closest("#ptTimeSelectCntr").length
            && !jQuery(ev.target).is("input.isPtTimeSelectActive")) {
            jQuery.ptTimeSelect.closeCntr();
        }
    };

    /**
     * Internal method. Called when page is initialized to add the time
     * selection area to the DOM.
     *  
     * @private
     * @memberOf jQuery.ptTimeSelect
     * @return {undefined}
     */
    jQuery.ptTimeSelect._ptTimeSelectInit = function () {
        jQuery(document).ready(function () {
            // Check if the container is already created in the document
            if (!jQuery('#ptTimeSelectCntr').length) {
                // Append the time selection container to the body
                jQuery("body").append(
                    '<div id="ptTimeSelectCntr" class="">' +
                    '   <div class="ui-widget ui-widget-content ui-corner-all">' +
                    '       <div class="ui-widget-header ui-corner-all">' +
                    '           <div id="ptTimeSelectCloseCntr" style="float: right;">' +
                    '               <a href="javascript: void(0);" onclick="jQuery.ptTimeSelect.closeCntr();" ' +
                    '                   class="ui-corner-all ui-state-default">' +
                    '                   <span class="ui-icon ui-icon-circle-close">X</span>' +
                    '               </a>' +
                    '           </div>' +
                    '           <div id="ptTimeSelectUserTime" style="float: left;">' +
                    '               <span id="ptTimeSelectUserSelHr">1</span> : ' +
                    '               <span id="ptTimeSelectUserSelMin">00</span> ' +
                    '               <span id="ptTimeSelectUserSelAmPm">AM</span>' +
                    '           </div>' +
                    '           <br style="clear: both;" /><div></div>' +
                    '       </div>' +
                    '       <div class="ui-widget-content ui-corner-all">' +
                    '           <div>' +
                    '               <div class="ptTimeSelectTimeLabelsCntr">' +
                    '                   <div class="ptTimeSelectLeftPane" style="width: 50%; text-align: center; float: left;">Hour</div>' +
                    '                   <div class="ptTimeSelectRightPane" style="width: 50%; text-align: center; float: left;">Minutes</div>' +
                    '               </div>' +
                    '               <div>' +
                    '                   <div style="float: left; width: 50%;">' +
                    '                       <div class="ui-widget-content ptTimeSelectLeftPane">' +
                    '                           <div class="ptTimeSelectHrAmPmCntr">' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">AM</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">PM</a>' +
                    '                               <br style="clear: left;" /><div></div>' +
                    '                           </div>' +
                    '                           <div class="ptTimeSelectHrCntr">' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">1</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">2</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">3</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">4</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">5</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">6</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">7</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">8</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">9</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">10</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">11</a>' +
                    '                               <a class="ptTimeSelectHr ui-state-default" href="javascript: void(0);">12</a>' +
                    '                               <br style="clear: left;" /><div></div>' +
                    '                           </div>' +
                    '                       </div>' +
                    '                   </div>' +
                    '                   <div style="width: 50%; float: left;">' +
                    '                       <div class="ui-widget-content ptTimeSelectRightPane">' +
                    '                           <div class="ptTimeSelectMinCntr">' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">00</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">05</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">10</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">15</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">20</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">25</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">30</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">35</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">40</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">45</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">50</a>' +
                    '                               <a class="ptTimeSelectMin ui-state-default" href="javascript: void(0);">55</a>' +
                    '                               <br style="clear: left;" /><div></div>' +
                    '                           </div>' +
                    '                       </div>' +
                    '                   </div>' +
                    '               </div>' +
                    '           </div>' +
                    '           <div style="clear: left;"></div>' +
                    '       </div>' +
                    '       <div id="ptTimeSelectSetButton">' +
                    '           <a href="javascript: void(0);" onclick="jQuery.ptTimeSelect.setTime()" class="ui-corner-all ui-state-default">' +
                    '               SET' +
                    '           </a>' +
                    '           <br style="clear: both;" /><div></div>' +
                    '       </div>' +
                    '    </div></div>'
                );

                var e = jQuery('#ptTimeSelectCntr');

                // Attach events for setting hours and minutes
                e.find('.ptTimeSelectMin').on("click", function() {
                    jQuery.ptTimeSelect.setMin($(this).text());
                });

                e.find('.ptTimeSelectHr').on("click", function() {
                    jQuery.ptTimeSelect.setHr($(this).text());
                });

                // Attach _doCheckMouseClick function to document
                $(document).on('mousedown', jQuery.ptTimeSelect._doCheckMouseClick);
            }
        });
    };

    // Initialize the plugin on document ready
    jQuery.ptTimeSelect._ptTimeSelectInit();

})(jQuery);
