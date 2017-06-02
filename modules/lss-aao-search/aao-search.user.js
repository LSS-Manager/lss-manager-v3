(function ($) {
    /**
     * Creates a select
     */
    function addToDropdown()
    {
        "use strict";
        // Add all the original AAO options
        $("a[id^='aao_']").each(function (i,e) {
            e = $(e);
            var option = document.createElement("option");
            option.value = e.attr('id').substring(4);
            option.text = e.text();
            $("#lssm_aao_dropdown").append(option);
        });

        // When we select something
        $("#lssm_aao_dropdown").on("change", function(){
            var aao_id = $(this).val();
            // We need a ID
            if (aao_id == -1)
                return;
            // Get the original button
            $("a[id='aao_"+aao_id+"']").click();
            /*var aao_e = $("a[id='aao_"+aao_id+"']");
            var aao_a = aao_e.get(0).attributes;
            // Iterate through all the attributes and call sebastians aao function
            for(var i = 6; i<aao_a.length; i++)
            {
                aao(aao_a[i].nodeName, $(aao_e.get(0)), I18n.t("intervention_order.vehicles."+aao_a[i].nodeName));
            }*/
            // Reset the select
            setTimeout(function(){
                $('#lssm_aao_dropdown').val("-1");
            }, 500);
        });
    }

    /**
     * Formats the options for the select
     * @param option
     * @returns {*}
     */
    function formatOptions(option)
    {
        "use strict";
        if(typeof option.id == "undefined" || option.id == "-1") {
            console.log("undef");
            return option.text;
        }
        var available = document.getElementById("available_aao_"+option.id).innerHTML;
        var bg = $("#aao_"+option.id).css("background-color");
        option = $('<span style="background-color: '+bg+';">'+available + option.text+'</span>');
        return option;
    }

    /**
     * Initialize
     */
    // Hide all original AAO buttons
    $("#mission-aao-group div:not(.clearfix)").each(function() {
        this.style.setProperty("display", "none");
    });
    // Create a new select
    $("#mission-aao-group").prepend('<select id="lssm_aao_dropdown" name="lssm_aao_dropdown" style="min-width: 400px;"><option value="-1">Bitte wählen...</option></select>');
    // Add a reset button
    $("#mission-aao-group").prepend('<button id="lssm_aao_reset" class="btn btn-small btn-danger">Zurücksetzen</button>');
    // Add the original AAO's to the select
    addToDropdown();
    // Format the options from the select
    $( "#lssm_aao_dropdown" ).select2({
        templateResult: formatOptions
    });

    $("#lssm_aao_reset").on("click", function(){
        "use strict";
        vehicleSelectionReset();
    });

    $(document).bind('keyup', function(e) {
        "use strict";
        e.preventDefault();
    });
})($);
