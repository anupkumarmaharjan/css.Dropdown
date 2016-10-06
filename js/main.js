jQuery(document).ready(function() {
    /*INITIATING DROPDOWN*/
    jQuery(".showOnThis").click(function() {
        if (jQuery(this).hasClass('showMenu')) {
            jQuery(this).removeClass('showMenu');
        } else {
            jQuery(this).addClass('showMenu');
        }
    });
/*HIDING THE DROPDOWN WHEN CLICKED ON OTHER PLACE RATHER THAN THE MENU*/
    jQuery(document).mouseup(function(e) {
        var container = jQuery(".dropDownMenu");
        // jQuery(".showOnThis").removeClass('showMenu');
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.find(".showOnThis").removeClass('showMenu');
        }
    });
/*MAKING DROPDOWN LIKE SELECT*/
    jQuery(".hasSelect").each(function(index, el) {
        jQuery(".showOnThis").click(function(event) {
            /* Act on the event */
            jQuery(this).parents(".hasSelect").siblings().find(".showOnThis").removeClass('showMenu');
        });
        jQuery("a").click(function(event) {
            jQuery("a.selected").removeClass('selected');
            jQuery(this).addClass('selected');
            /* Act on the event */
            var copyThis = jQuery(this).html();
            jQuery(this).parents(".hasSelect").find(".showOnThis").addClass("selectedValue").html(copyThis);
            jQuery(".showOnThis").removeClass('showMenu');
        });
    });
/* FOR MAKING NEXT LEVEL OF MENU COME TO VIEW*/
    jQuery(".forth").click(function(event) {
        /* Act on the event */
        jQuery("li").removeClass('currentLevel');
        jQuery(this).parent().parent(".parentlevel").addClass('currentLevel');
        jQuery(this).parents(".parentlevel:first").addClass('openedThis').siblings("li").addClass('hideAll');
        jQuery(this).parents("ul").parents("ul").addClass('hideThisParent');

    });
/* RETURN TO PARENT MENU*/
    jQuery(".back").click(function(event) {
        /* Act on the event */
        jQuery("li").removeClass('currentLevel');
        jQuery(this).parent().parent().parent().parent(".parentlevel").addClass('currentLevel');
        jQuery(this).parents(".parentlevel:first").removeClass('openedThis').siblings("li").removeClass('hideAll');
        jQuery(this).parents("ul").parents("ul").removeClass('hideThisParent');
    });

});
