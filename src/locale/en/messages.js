/* eslint-disable */export default{languageData:{"plurals":function(n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}},messages:{"Add Element":"Add Element","Assignment":"Assignment","Cancel":"Cancel","Confirm":"Confirm","Delete":"Delete","Max":"Max","Mean":"Mean","Median":"Median","Min":"Min","N":"N","Next Page":"Next Page","Previous Page":"Previous Page","Regular Expression Tester":"Regular Expression Tester","Return to last viewed page":"Return to last viewed page","Rows per page:":"Rows per page:","SD":"SD","The page you are looking for was not found!":"The page you are looking for was not found!","This Field is required!":"This Field is required!","Unsupported":"Unsupported","Var":"Var","You need to add a file first.":"You need to add a file first.","{from}-{to} of {count}":function(a){return[a("from"),"-",a("to")," of ",a("count")]}}};