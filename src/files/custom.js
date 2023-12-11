var result_1 = 0;
var result_2 = 0;
var result_3 = 0;
var result_4 = 0;
var result_5 = 0;
$(document).ready(function(){
	$('.options__input').change(function (){
		$el = $(this);
		$el.parents('.test-page__block').find('.test-page__button').css('display','flex');
	});
	$('.test-page__button').click(function (){
		$el = $(this);
		$('.test-page__block').removeClass('active');
		var selected_answer = $el.parents('.test-page__block').find('.options__input:checked').val();
		if(selected_answer == 'value-a'){
			result_1++;
		}else if(selected_answer == 'value-b'){
			result_2++;
		}else if(selected_answer == 'value-c'){
			result_3++;
		}else if(selected_answer == 'value-d'){
			result_4++;
		}else if(selected_answer == 'value-e'){
			result_5++;
		}
		if($el.parents('.test-page__block').hasClass('test-page__block_10')){
			for(var i=5;i>=2;i--){
				if(result_1 >= i){
					$('.result-test__main').addClass('result-test__main_01');
					break;
				}else if(result_2 >= i){
					$('.result-test__main').addClass('result-test__main_02');
					break;
				}else if(result_3 >= i){
					$('.result-test__main').addClass('result-test__main_03');
					break;
				}else if(result_4 >= i){
					$('.result-test__main').addClass('result-test__main_04');
					break;
				}else if(result_5 >= i){
					$('.result-test__main').addClass('result-test__main_05');
					break;
				}
			}
			$('.test-page__blocks').removeClass('show-block');
			$('.test-page__results').addClass('show-block-result');
		}else{
			$el.parents('.test-page__block').next().addClass('active');
		}
	});
});