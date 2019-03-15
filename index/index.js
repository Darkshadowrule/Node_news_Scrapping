const request = require('request');
const Table = require('cli-table');
const cheerio = require('cheerio');


var table = new Table({
    head: ['Heading', 'Url']
  , colWidths: [100, 200]
});

var url='https://news.ycombinator.com';
request(url,(err,res,body)=>{
  if(!err)
  {
    var $ = cheerio.load(body);
     $('.athing').each(function(i){
       var a = $(this).children();
       var b=$('.storylink').eq(i)
       table.push([a.text().toString(),b.attr('href').toString()]);
     });
}
console.log(table.toString());
})
