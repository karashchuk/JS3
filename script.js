
window.onload = function(){
    //var elem=$('#btn1');
    var elem = document.getElementById('btn1');
    elem.onclick = function(){
        
        //1. Найти все элементы h1, являющиеся потомками div и заменить их содержимое на произвольное.
        //
        var l=$('div h1').length;
        for(i=0;i<l;i++){
            $('div h1:eq('+i+')').html('new div '+i);
        }
        
        //2. Установить всем input type="text" произвольное содержимое. Содержимое второго инпута должно отличаться от первого.
        //
        $(":text:eq(0)").val('Имя');
        $(":text:eq(1)").val('Фамилия');
        
        //3. Выведите значение option с value=2
        //
        $("select option[value='2']").attr('selected','');
        
        //4. Обернуть текст во втором li тегом b:
        //
        $('ul li:eq(1)').html('<b>'+$('ul li:eq(1)').html()+'</b>');
        
        //5. Извлеките последний li из предыдущего примера.
        //
        $('#test').text('последний li: '+$('ul li:last').text());
    } 
    
}