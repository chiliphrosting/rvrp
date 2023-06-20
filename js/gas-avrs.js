/**
 *
 *
 *
 *
 * */

//not to be used for live
var testUrl="https://script.googleusercontent.com/a/macros/avrstory.net/echo?user_content_key=3Qb_eT-1s7xbQSo3rs6Tv1YfSwUJriTxBp8o0G8M8ILLmliu0-NloDb5q5HxmWSbdiq3yNw6zaB_a72qcLpp1uHlJPhDDqebm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9G1f60idhIbyzZN-KNtFXBh8JJZFsljkg120m8CfvOnmdImJut9ByhxDBkZ8ZZAoQO27u_6DAS3Yj4w2sjZViZxM9M7vnHFCrlEg_pwBM8e1oToa7N5RGl4QgMyufXQ14&lib=M9ecSc9uU2BkVzFvkI4HMc3C7tyB-4zAN";

$.getJSON(testUrl, function(data){
	//console.log(data);
	console.log(data.section0.payload[1][0])

})
