/*------
valied version 1.3
*/
export {Valid};
class Valid {
    constructor(form){
        this.form = form;
    }
    hasForm(){
        var formAll,form, obj =[], dup =[], inputs =[], output, includ;
        formAll = document.querySelectorAll('form');
        switch(formAll.length){
            case 0:
                output = false;
                alert('error: No form have in this page');
            break;
            default:
                for(var i=0; i<formAll.length; i++){
                    obj.push(document.querySelectorAll('form')[i].getAttribute('name'));
                }
                includ = obj.includes(this.form.name);
                if(includ == true){
                    for(var i=0; i<obj.length; i++){
                       if(obj[i] == this.form.name){
                          dup.push(1);
                       }
                    }
                    if(dup.length > 1){
                      alert('error: morethen one \" form \" was including same name');
                      output=false;
                    }else{
                        form = formAll[obj.indexOf(this.form.name)];
                        var formInput = form.querySelectorAll('input');
                        for(var i=0; i<formInput.length; i++){
                            inputs.push(formInput[i].getAttribute('name'));
                        }
                        if(inputs.filter((e,i,a)=>a.indexOf(e)!==i).length == 0){
                            output = true;
                        }else{
                            output =false;
                            alert('error: one more \" inpute \" attributes name is same');
                        }
                    }
                } else{
                    output = false;
                }
            break;
        }
        var ret={
            "valid":output,
            "form_no":obj.indexOf(this.form.name)
        }
        return ret;
    }
    check(){
        var formAll,form,method,action,obj=[],checkValue=[],arminlength=[],armaxlength=[],input,parts=[], output, include, select,textarea;
        form = this.hasForm();
        formAll = document.querySelectorAll('form')[form.form_no];
        method = formAll.getAttribute("method");
        action= formAll.getAttribute("action");
        input = formAll.querySelectorAll('input');
        select = formAll.querySelectorAll('select');
        textarea = formAll.querySelectorAll('textarea');
        (method == undefined) ? alert('form method is undefine') : form.method = method;
        (action == undefined) ? alert('form action is undefine') : form.action = action;
        if(form.valid == true){
         if(0 !== input.length){
          if(0 !== this.form.input.length){
            for(var i=0;i<input.length;i++){
                var text_value = input[i].value;
                var type = input[i].getAttribute('type');
                var name = input[i].getAttribute('name');
                var minlength=input[i].getAttribute('minlength');
                var maxlength=input[i].getAttribute('maxlength');
                var required=input[i].getAttribute('required');
                var objln=this.form.input[i];
                (required != null)?required.toLowerCase():console.log("required");
                (objln.class == undefined)||(objln.class==null)?objln.class=null:console.log("class active");
                var objpart={
                    "required":{
                        "name":name,
                        "type":type,
                        "requir":required,
                        "class":objln.class,
                        "maxlength":maxlength,
                        "minlength":minlength,
                        "text_length":text_value.length,
                        "text_value":text_value,
                    }
                }
                parts.push(objpart.required);
                switch(type){
                    case "text":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "email":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "password":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "date":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "select":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "checkbox":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "search":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "button":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        break;
                    case "color":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "date":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "datetime-local":
                        var require_d =true;
                        checkValue.push(require_d);
                        break;
                    case "file":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "hidden":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "image":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "month":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "number":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "radio":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "range":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "reset":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "reset":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "tel":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "time":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "url":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "week":
                        var require_d = true;
                        checkValue.push(require_d);
                        break;
                    case "submit":
                        var require_d = this.required(objpart.required);
                        checkValue.push(require_d);
                        console.log("that is submit");
                        break;
                    default:
                        console.log("i have see a error");
                        break;
                }
            }
          }else{
              alert('input arry not define in your javascript object');
          }
         }
         if(0 !== select.length){
          if(0 !== this.form.select.length){
              for(var i=0;i<select.length;i++){
                var select_value = select[i].value;
                var select_required = select[i].getAttribute('required');
                var select_name = select[i].getAttribute('name');
                var objln_select = this.form.select[i];
                (select_required == null)||(select_required == undefined)? select_required == null : select_required.toLowerCase();
                (objln_select == null)||(objln_select == undefined)?select_required == null : select_required.toLocaleLowerCase();
                var objpart_select ={
                    "required":{
                        "required":select_required,
                        "type":"select",
                        "class":objln_select.class,
                        "max_length":select_value.length,
                        "min_length":select_value.length,
                        "text_length":select_value.length,
                        "text_value":select_value
                    }
                }
                parts.push(objpart_select.required);
                if(objpart_select.required.required == 'required'){
                    if((objpart_select.required.text_length == 0)||(objpart_select.required.text_length == 1)){
                        checkValue.push(false);
                        this.message(objpart_select.required,this.letter().required);
                        //document.querySelector('.'+objpart_select.required.class).innerHTML = 'plese select perfect value';
                        
                    }else{
                        checkValue.push(true);
                        document.querySelector('.'+objpart_select.required.class).innerHTML = '';
                    }
                }else{
                    checkValue.push(true);
                }
            }
          }else{
              alert('select arry not define in your javascript object');
          }
         }
         if(0 !== textarea.length){
          if(0 !== this.form.select.length){
              for(var i=0;i<select.length;i++){
                var select_value = select[i].value;
                var select_required = select[i].getAttribute('required');
                var select_name = select[i].getAttribute('name');
                var objln_select = this.form.select[i];
                (select_required == null)||(select_required == undefined)? select_required == null : select_required.toLowerCase();
                (objln_select == null)||(objln_select == undefined)?select_required == null : select_required.toLocaleLowerCase();
                var objpart_select ={
                    "required":{
                        "required":select_required,
                        "type":"textarea",
                        "class":objln_select.class,
                        "max_length":select_value.length,
                        "min_length":select_value.length,
                        "text_length":select_value.length,
                        "text_value":select_value
                    }
                }
                parts.push(objpart_select.required);
                if(objpart_select.required.required == 'required'){
                    if((objpart_select.required.text_length == 0)||(objpart_select.required.text_length == 1)){
                        checkValue.push(false);
                        this.message(objpart_select.required,this.letter().required);
                        //document.querySelector('.'+objpart_select.required.class).innerHTML = 'plese select perfect value';
                        
                    }else{
                        checkValue.push(true);
                        document.querySelector('.'+objpart_select.required.class).innerHTML = '';
                    }
                }else{
                    checkValue.push(true);
                }
            }
          }else{
              alert('textarea arry not define in your javascript object');
          }
         }
            if(checkValue.includes(false) !== true){
                document.querySelector("."+this.form.class).innerHTML= null;
                switch(this.form.request[0].toLowerCase()){
                    case "html":
                        input = document.createElement("input");
                        input.setAttribute("type","submit");
                        document.querySelector("."+this.form.class).appendChild(input);
                        input.click();
                        document.querySelector("."+this.form.class).removeChild(input);
                        return 0;
                        break;
                    case "ajax":
                        console.log("ajax request success");
                        form.input =parts;
                        return form;
                        break;
                    default:
                        alert("error: object parts object.request[0] not define that is html, ajax etc");
                        return 0;
                        break;
                }
            }else{
                document.querySelector("."+this.form.class).innerHTML= this.letter().perfect;
            }
        }else{
            console.log('this form is not valied');
        }
    }
    required(objpart){
        var regex =/%s/g;
        switch(objpart.requir){
            case "required":
                if(objpart.text_length==0){
                    this.message(objpart,this.letter().required);
                    return false;
                }else if(objpart.text_length<objpart.minlength){
                    var text= this.letter().min_length.replace(regex,objpart.minlength);
                    this.message(objpart,text);
                    return false;
                }else if(objpart.text_length>objpart.maxlength){
                    var text= this.letter().min_length.replace(regex,objpart.maxlength);
                    this.message(objpart,text);
                    return false;
                }else if(objpart.minlength<=objpart.text_length<=objpart.maxlength){
                    this.message(objpart,"");
                    return true;
                }
                break;
            case null:
                return true;
                this.message(objpart,'');
                break;
            default:
                alert("Attributes \' required=\"required\" \' select perfectely or not define");
                this.message(objpart,'');
                return false;
                break;
        }
    }
    Regex(){
      var ruleRegex = /^(.+?)\[(.+)\]$/,
          numericRegex = /^[0-9]+$/,
          integerRegex = /^\-?[0-9]+$/,
          decimalRegex = /^\-?[0-9]*\.?[0-9]+$/,
          emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
          alphaRegex = /^[a-z]+$/i,
          alphaNumericRegex = /^[a-z0-9]+$/i,
          alphaDashRegex = /^[a-z0-9_\-]+$/i,
          naturalRegex = /^[0-9]+$/i,
          naturalNoZeroRegex = /^[1-9][0-9]*$/i,
          ipRegex = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
          base64Regex = /[^a-zA-Z0-9\/\+=]/i,
          numericDashRegex = /^[\d\-\s]+$/,
          urlRegex = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
          dateRegex = /\d{4}-\d{1,2}-\d{1,2}/;
    }
    message(parts,letter =""){
        document.querySelector('.'+parts.class).innerHTML = letter;
    }
    letter(){
      var messages = {
          perfect:'Not perfect, check value',
          required: 'The field is required.',
          matches: 'The  field does not match the %s field.',
          default: 'The field is still set to default, please change.',
          valid_email: 'The field must contain a valid email address.',
          valid_emails: 'The  field must contain all valid email addresses.',
          min_length: 'The field must be at least %s characters in length.',
          max_length: 'The  field must not exceed %s characters in length.',
          exact_length: 'The field must be exactly %s characters in length.',
          greater_than: 'The %s field must contain a number greater than %s.',
          less_than: 'The %s field must contain a number less than %s.',
          alpha: 'The %s field must only contain alphabetical characters.',
          alpha_numeric: 'The %s field must only contain alpha-numeric characters.',
          alpha_dash: 'The %s field must only contain alpha-numeric characters, underscores, and dashes.',
          numeric: 'The %s field must contain only numbers.',
          integer: 'The %s field must contain an integer.',
          decimal: 'The %s field must contain a decimal number.',
          is_natural: 'The %s field must contain only positive numbers.',
          is_natural_no_zero: 'The %s field must contain a number greater than zero.',
          valid_ip: 'The %s field must contain a valid IP.',
          valid_base64: 'The %s field must contain a base64 string.',
          valid_credit_card: 'The %s field must contain a valid credit card number.',
          is_file_type: 'The %s field must contain only %s files.',
          valid_url: 'The %s field must contain a valid URL.',
          greater_than_date: 'The %s field must contain a more recent date than %s.',
          less_than_date: 'The %s field must contain an older date than %s.',
          greater_than_or_equal_date: 'The %s field must contain a date that\'s at least as recent as %s.',
          less_than_or_equal_date: 'The %s field must contain a date that\'s %s or older.'
      };
      return messages;
    }
    static Reset(qs) {
        document.querySelector(qs).reset();
    }
}