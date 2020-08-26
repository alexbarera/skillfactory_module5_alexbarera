//Объявление переменных 

const var1Node = $('.var1_js');
const var2Node = $('.var2_js');
const var3Node = $('.var3_js');
const var4Node = $('.var4_js');
const var5Node = $('.var5_js');
const var6Node = $('.var6_js');
const speachNode = $('.speach_js');
const result = $('.result');

const obj1 = {
	"text":
	["Жили-были {var1} да {var2}",
	"Была у них {var3}",
	"Снесла {var3} {var4}, не простое - золотое",
	"- {var1} бил, бил - не разбил",
	"- {var2} била, била - не разбила",
	"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
	"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
	"{speach}"]};

const btnCreate = $('.btn_create');
const btnReplace = $('.btn_replace');



// Навешивание событий на кнопки

btnCreate.click(function() {
  result.html(obj1.text);
})

btnReplace.click(function(){
	const var1 = var1Node.val();
	const var2 = var2Node.val();
	const var3 = var3Node.val();
	const var4 = var4Node.val();
	const var5 = var5Node.val();
	const var6 = var6Node.val();
	const speach = speachNode.val();

 	const obj2 = {
    "text":[
      `Жили-были ${var1} да ${var2}.`,
      ` Была у них ${var3}.`,
      ` Снесла ${var3} ${var4}, не простое - золотое.`,
      `- ${var1} бил, бил - не разбил`,
      `- ${var2} била, била - не разбила.`,
      ` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
      ` ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
      ` ${speach}`,
    ]
  };
 	result.html(obj2.text);

})
