<! DOCTYPE html>
< html >
< head >
< meta  charset = ' utf-8 ' />
< meta  content = ' width = lebar perangkat, skala minimum = 1, skala awal = 1 '  name = ' viewport ' />
< title > Posting Terakhir </ title >
< style >
body { margin : 0 ; bantalan : 0 ; font-family : -apple-system , BlinkMacSystemFont, " Roboto " , " Segoe UI " , " Oxygen-Sans " , " Ubuntu " , " Cantarell " , " Helvetica Neue " , sans-serif ;}
a , img { transisi : all  .4 s  easy -in-out }
#recentpostnav { border : 1 px  solid  # 585858 ; lebar : 100 % ; margin : 0  otomatis }
#recentpost { margin : 0 ; latar belakang : #fff ;}
.recentpostel { background : #fff ; display : blok ; border-bottom : 1 px  solid  #ddd ; margin : 0  0  10 px ; padding : 0  0  10 px ; tinggi : 72 px }
.recentpostel : last-child { margin : 0 ; border-bottom : tidak ada ;}
.recentpostel  img { background : #fff ; bantalan : 0 ; mengapung : kiri ; tinggi : 90 px ; margin-right : 10 px ; lebar : 90 px ; display : block ;}
.recentpostel  h6 , .recentpostel  h6  a { text-decoration : none ; ukuran font : 16 px ; font-berat : 700 ; garis-tinggi : 1.2 ; margin : 0 ; warna : # 555 }
.recentpostel  h6  a : hover { color : # 777 }
.recentpostel  img : hover { opacity : .6 }
#recentpostload { color : # 888 ; font-family : Tahoma ; ukuran font : 100 px ; spasi huruf : -10 px ; perataan teks : tengah ; text-shadow : -5 px  0  1 px  # 444 ; latar belakang : url ( https://2.bp.blogspot.com/-60aISBQLRY0/VFBMqzLfzGI/AAAAAAAAABgM/GInmVTvEzkc/s1600/loader.gif ) 50 %  50 %  tanpa pengulangan  #fff ;tinggi : 470 px ; perbatasan : 1 px  solid  #ddd }
#recentpostnavfeed { background : #eee ; perataan teks : tengah ; margin : 0 }
#recentpostnavfeed  a { text-decoration : none ; display : blok ; padding : 5 px }
#recentpostnavfeed  span { padding : 5 px }
#recentpostnavfeed  .next { mengapung : tepat }
#recentpostnavfeed  .previous { float : left }
#recentpostnavfeed  .home { text-align : center ; display : inline-block ;}
#recentpostnavfeed  svg { vertical-align : middle ;}
</ style >

</ head >

< tubuh >
< div  class = " box "  id = " box " >
< div  id = " Recentpost " > </ div >
< div  id = " recentpostnavfeed " > </ div >
</ div >
< script >
function  getQueryVariable ( variabel ) {
  var query =  window . lokasi . cari . substring ( 1 );
  var vars =  permintaan . split ( " & " );
  for ( var i = 0 ; i < vars . length ; i ++ ) {
    var pair = vars [i]. split ( " = " );
    if (pair [ 0 ] == variable) { return pair [ 1 ];}
  }
  kembali ( false );
}
  function  menghasilkanCss ( q ) {
    var css        =  dokumen .createElement ( ' style ' ),
        sp2        =  dokumen .getElementById ( ' box ' ),
        parentDiv  =  sp2 . parentNode ;
    css . type  =  ' text / css ' ;
    if ( css . styleSheet ) css . styleSheet . cssText  = q;
    lain  css . appendChild ( dokumen . createTextNode (q));
    parentDiv .insertBefore (css, sp2);
  }
    ( fungsi () {
    var q =  ' .recentpostel h6 a {font-size: '  +  getQueryVariable ( ' fontSize ' ) +  ' ; warna: # '  +  getQueryVariable ( ' color ' ) +  ' } ' ;
        menghasilkanCss (q);
  }) ();
  </ skrip >
< script >
var urlblog =  getQueryVariable ( " url " );
media $ thumbnail.url: "https://3.bp.blogspot.com/-BHuXHny1kOk/VXrkSyxKCjI/AAAAAAAAACas/pZLJAEUDtds/s72/no-image.png", s + = "<div class = 'latestpostel'>,," s + = "<a href='"+r+"' target='_blank' title='"+n+"'> <img alt = '" + n + "' width = '90 'src ='" + a + "' tinggi = '90 'judul =' "+ n +" '/> </a> ", s + =" <h6> <a href =' "+ r +" 'target =' _ blank 'title =' "+ n +" ' > "+ n +" </a> </h6> ", s + =" </div> "} document.getElementById (" Recentpost "). innerHTML = s, s =" ", s + = urlprevious?" <a href = 'javascript: navigasifeed (-1);' class = 'sebelumnya' title = 'Sebelumnya'> <svg width = '24 ' height = '24 'viewBox =' 0 0 24 24 '> <path fill =' # 333333 'd =' M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5, 5.5L8,11H20Z '/> </svg> </a> ":" <span class =' ​​noactived before '' <svg width = '24 'height = '24' viewBox = '0 0 24 24'> <path isi = '# 777777' d = 'M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z' /> </svg> </span> " , s + = urlnext? "<a href = 'javascript: navigasifeed (1);' class = 'next' title = 'Next'> <svg width = '24 'height = '24' viewBox = '0 0 24 24'> <path fill = '# 333333' d = 'M4,11V13H16L10.5,18.5 L11.92,19.92L19.84,12L11.92,4.08L10.5.5L16,11H4Z '/> </svg> </a> ":" <span class =' noactived next '> <svg width = '24' height = '24 'viewBox =' 0 0 24 24 '> <path fill =' # 777777 'd =' M4,11V13H16L10.5,18.5L11.92,19.92L19. 84,12L11.92,4.08L10.5,5.5L16,11H4Z '/> </svg> </span> ", s + =" <a href =' javascript: navigasifeed (0); ' class = 'home' title = 'Home'> <svg width = '24 'height = '24' viewBox = '0 0 24 24'> <path fill = '# 141414' d = 'M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z '/> </svg> </a> ", document.getElementById (" recentpostnavfeed "). innerHTML = s} fungsi navigasifeed (e) {var t, n; -1 == e? (t = urlprevious.indexOf ( "?"), n = urlprevious.substring (t)): 1 == e? (t = urlnext.indexOf ("?"), n = urlnext.substring (t)): n = "? start-index = 1 & hasil maksimal = 5 & orderby = dipublikasikan &
</ skrip >
</ body >
</ html >