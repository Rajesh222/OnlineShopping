export default function(){  
  this.transition(
    this.fromRoute('products'),
    this.toRoute('products.product_id'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}