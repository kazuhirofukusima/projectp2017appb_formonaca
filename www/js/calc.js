ons.ready(function() {
    
    /* セルがクリックされたときのイベント */
    $('#calc td:not(#input_button)').on('click', function(){
        // 押されたテーブルの数値を取得
        var num = $(this).text();
    
        // もし、←ボタンが押されたら、一文字削除する
        if ( num === '←' ){
            deleteLastNum();
            return;
        }
    
        // もし、Cボタンが押されたら、全て削除する
        if ( num === 'C' ){
            deleteAllNum();
            return;
        }
    
        // inputに入力されている文字を取得
        var formula = $('#result').val();
        formula = parseInt(formula.substr(1));
        
        if(formula===0){
            // inputに追加
            $('#result').val('￥'+(num));
        }else{
            $('#result').val('￥'+(formula + num));            
        }
    });
    
    /* 一文字削除ボタンが押されたら */
    function deleteLastNum(){
        // inputの文字列を取得
        var formula = $('#result').val();
        
        //最後の1文字を削除
        formula = formula.substr( 0, formula.length-1 );
        if(formula==='￥'){
            $('#result').val("￥0");            
        }else{
            formula = parseInt(formula.substr(1));
    
            // 結果をinputにセット
            $('#result').val('￥'+formula);
        }
    }
    
    /* クリアボタンが押されたら */
    function deleteAllNum(){
        // inputをリセット
        $('#result').val("￥0");
    }
});