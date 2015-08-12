({
    extendsFrom: 'EnumField',
    initialize: function(options){
        //this.plugins = _.clone(this.plugins) || [];
        this._super('initialize', [options]);
        this._loadDynamicDropdown();
    },
    _loadDynamicDropdown: function(){
        var industryOptions = this._getCurrentOptions(this.model.get(this.name));
        console.log(app.lang.getAppListStrings('industry_dom'));
        console.log(app.lang.getAppListStrings('account_type_dom'));
        console.log(industryOptions);
        this.type = 'enum';
        this.def.type = 'enum';
        this.def.options = industryOptions;
        this.items = [];
        
        console.log(this);
        this._render();
    },
    _getCurrentOptions: function(val){
        console.log("VALUE: " + val);
        var industry = !_.isEmpty(val) ? val : '';
        var options = {};
        options[""] = "";
        switch(industry){
            case 'Chemicals':
                options["Chemicals"] = "Chemicals";
                options["Investor"] = "Investor";
                break;
            case 'Investor':
                options["Investor"] = "Investor";
                options["Banking"] = "Banking";
                break;
            default:
                break;
        }
        
        return options;
    }
})