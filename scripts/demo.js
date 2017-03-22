(function(global){

    function load(){
        //constructor
    }

    load.prototype.info = function(){
        var self = this;
        var tabinfo = {};
        tabinfo.grape = "Black grapes are delicious, But did you also know that black grapes are just as healthy...";
        tabinfo.apple = "Black grapes are delicious, But did you also know that black grapes are just as healthy...";
        tabinfo.orange = "Black grapes are delicious, But did you also know that black grapes are just as healthy...";
        tabinfo.kiwi = "Black grapes are delicious, But did you also know that black grapes are just as healthy...";
        tabinfo.mango = "Black grapes are delicious, But did you also know that black grapes are just as healthy...";
        tabinfo.fig = "Black grapes are delicious, But did you also know that black grapes are just as healthy...";

        return tabinfo;
    };


    $.extend(true , window.Home, load.prototype);

    global.load = load;

}(this));
