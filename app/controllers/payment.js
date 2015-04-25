import Ember from 'ember';


export default Ember.ObjectController.extend({

     needs:['application'],

actions:{
	pay: function(product){
			var _this=this;
			var cardNumber = this.get('cardNumber');
			var temp = document.getElementById("month");
            var selectedmonth = temp.options[temp.selectedIndex].value;
            var temp1 = document.getElementById("year");
            var selectedyear = temp1.options[temp1.selectedIndex].value;
            if(cardNumber==='1234567812345678' && selectedmonth==='2' && selectedyear==='2016'){

            	product.content.forEach(function(p){
					p.set('productStatus', 'order');
                    p.set('isSoldOut', true);
            	});
                               
                        product.save().then(function(){
                    	_this.transitionToRoute('order');
                    	 
                        
                    });
                   
                    

                
		}
	}
}
  

});