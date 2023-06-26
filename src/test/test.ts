import { getFormData} from "../utils";

let s = `

 




 
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>本科生网上服务系统</title>  


<link href="/resources/css/common/style.css" rel="stylesheet" type="text/css" />
<link href="/resources/css/common/content.css" rel="stylesheet" type="text/css" />
<link href="/resources/css/common/pageTag.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/resources/js/jquery/jquery-1.7.2.min.js"></script>

 <script src="/resources/js/jquery/jquery.form.js"  type="text/javascript"></script>
<script type="text/javascript" src="/resources/js/common/validator.js" ></script>
<script type="text/javascript" src="/resources/js/common/jqcheckBox.js"></script>
<script type="text/javascript" src="/resources/js/jquery/jquery.chained.remote.js"></script>
<script type="text/javascript" src="/resources/js/common/jqreload.js"></script>
<style type="text/css">
	html, body { height:100%; }
	.Contentbox { width:100%; min-height:100%;height:auto }
	*html .Contentbox { height:100% }
</style>
<script type="text/javascript" src="/resources/js/common/modalpopup.js"></script>

<script type="text/javascript">
jQuery().ready(function (){ 
	
	});

 	//查询
	function queryLike(){
		var xnxqid = $("#xnxqid").val();
		var pjsfkf = $("#pjsfkf").val();

		document.queryform.action = "/cjcx/queryQmcj";
        document.queryform.submit();
	}

 	//查看详细
	function queryCjView(id,rwh,jhh){
 		var src = "/cjcx/queryCjxxView?id="+id+"&rwh="+rwh+"&jhh="+jhh;
 		jQuery("#iframename_cj").attr("src",src);
 		BOX_show('divShowBox');
	}

	//取消
	function onQx(){
	 	jQuery("#iframename_cj").attr('src','/jsp/student/pub/empty.jsp');
		BOX_remove('divShowBox');
	}
	
	//返回
	function onBackObj(){
	 	window.location.href="/onBackMain";
	}
	
  </script>
</head>
<body>
<div class="Contentbox">
    <div class="pd10">
         <div class="address">当前位置： <a href="javascript:void(0);" onclick="javascript:queryLike();return false;">成绩查询</a> </div>
        <div class="clr"></div>
        <form id="queryform" name="queryform" method="post">
        <div class="butsea" > 
           <table border="0" align="left" cellpadding="0" cellspacing="0" >
            	<tr>
	            	<td><div class="ico_button button_1"><a href="javascript:void(0);" onclick="javascript:onBackObj();return false;"><span>返回</span></a> </div> </td>       	            	 
            	</tr>
            </table>
             
            <table border="0" cellpadding="0" cellspacing="0" align="right">
                <tr>
                	<td>学年学期：</td>
                    <td>
						 <select name="pageXnxq" id="xnxqid" class="XNXQ_CON">
						 	<option value="">-全部-</option>
	                		
					  			<option value="2020-20211" >2020秋季</option>
					  		
					  			<option value="2020-20212" >2021春季</option>
					  		
					  			<option value="2020-20213" >2021夏季</option>
					  		
					  			<option value="2020-20214" >2021暑假</option>
					  		
					  			<option value="2020-20215" >2021寒假</option>
					  		
					  			<option value="2021-20221" >2021秋季</option>
					  		
					  			<option value="2021-20222" >2022春季</option>
					  		
					  			<option value="2021-20223" >2022夏季</option>
					  		
					  			<option value="2022-20231" >2022秋季</option>
					  		
					  			<option value="2022-20232" >2023春季</option>
					  		
					  			<option value="2022-20233" >2023夏季</option>
					  		
					  			<option value="2023-20241" >2023秋季</option>
					  		
					  			<option value="2023-20242" >2024春季</option>
					  		
					  			<option value="2023-20243" >2024夏季</option>
					  		
	                	</select> 
                    </td>
                    <td>重修补考：</td>
                    <td>
						 <select name="pageBkcxbj"  class="CXBK_CON">
						 	<option value="">-全部-</option>
					  		<option value="0" >正考</option>
					  		<option value="1" >补考</option>
					  		<option value="2" >重修</option>
	                	</select> 
                    </td>
                    <td>是否及格：</td>
                    <td>
						 <select name="pageSfjg"  class="SFJG_CON">
						 	<option value="">-全部-</option>
					  		<option value="0" >不及格</option>
					  		<option value="1" >及格</option>
	                	</select> 
                    </td>
                    <td>课程：</td>
                    <td><input type="text" value="" name="pageKcmc" style="width: 90px;"  class="KC_CON"/></td>
                    <td>
                    	<div class="addlist_button2"> 
		                   	<a href="javascript:void(0);" onclick="javascript:queryLike();return false;"><span>查&nbsp;&nbsp;询</span></a> 
		                </div>
		             </td>
                </tr>
            </table>
        </div>
		</form>
        <div class="clr"></div>      
        <div class="list"> 
            <table width="100%"  cellpadding="0" cellspacing="0" style="border-collapse:collapse" class="bot_line">
               <tr>
                  <th width="3%">序号</th>
                  <th width="6%">学年学期</th>
                  <th width="11%">开课院系</th>
                  <th width="8%">课程代码</th>
                  <th width="20%">课程名称</th>
                  <th>课程性质</th>
                  <th>课程类别</th>
                  <th>学分</th>
                  <th>是否考试课</th>
                  <th>参与学分绩</th>
                  <th>补考重修标记</th>
                  <th>总成绩</th>
                  <th>成绩备注</th>
                  <th>教学班排名</th>

                  <th>操作</th>
                </tr>
                  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>1</td>
	        		<td>2020秋季</td>
	        		<td>学工处</td>
		         	<td>AD11014</td>
		         	<td>思想政治理论实践课</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>90.7</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8543988','','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>2</td>
	        		<td>2020秋季</td>
	        		<td>学工处</td>
		         	<td>AD15002</td>
		         	<td>军事理论</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>86</td>
		            <td></td>
		            <td>126</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8198936','2020-2021-1-AD15002-008','1000258500');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>3</td>
	        		<td>2020秋季</td>
	        		<td>学工处</td>
		         	<td>AD15003</td>
		         	<td>军事技能</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>90</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8248128','2020-2021-1-AD15003-001','1000258499');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>4</td>
	        		<td>2020秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS14005</td>
		         	<td>大学计算机-计算思维导论D</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>81</td>
		            <td></td>
		            <td>111</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8194300','2020-2021-1-CS14005-002','1000258080');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>5</td>
	        		<td>2020秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS31106</td>
		         	<td>高级语言程序设计</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>95</td>
		            <td></td>
		            <td>19</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8140290','2020-2021-1-CS31106-006','1000245240');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>6</td>
	        		<td>2020秋季</td>
	        		<td>电气工程及自动化学院</td>
		         	<td>EE22507</td>
		         	<td>生活中实用电磁场分析与求解</td>
		         	<td>任选</td>
		         	<td>新生研讨</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>91</td>
		            <td></td>
		            <td>20</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8150918','2020-2021-1-EE22507-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>7</td>
	        		<td>2020秋季</td>
	        		<td>电子与信息工程学院</td>
		         	<td>EI33002</td>
		         	<td>PjBL与科技创新</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>75</td>
		            <td></td>
		            <td>142</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8259100','2020-2021-1-EI33002-002','1000245241');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>8</td>
	        		<td>2020秋季</td>
	        		<td>外国语学院</td>
		         	<td>FL12049</td>
		         	<td>英语名篇诵读</td>
		         	<td>必修</td>
		         	<td>英语</td>
		         	<td>1.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>72.8</td>
		            <td></td>
		            <td>22</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8255553','2020-2021-1-FL12049-002','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>9</td>
	        		<td>2020秋季</td>
	        		<td>生命科学与技术学院</td>
		         	<td>LS21001</td>
		         	<td>生命科学基础与应用</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>78</td>
		            <td></td>
		            <td>113</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8149476','2020-2021-1-LS21001-006','1000245239');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>10</td>
	        		<td>2020秋季</td>
	        		<td>数学学院</td>
		         	<td>MA21003</td>
		         	<td>微积分B(1)</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>5.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>89</td>
		            <td></td>
		            <td>14</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8209115','2020-2021-1-MA21003-023','1000244771');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>11</td>
	        		<td>2020秋季</td>
	        		<td>数学学院</td>
		         	<td>MA21012</td>
		         	<td>代数与几何B</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>4.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>99</td>
		            <td></td>
		            <td>8</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8278005','2020-2021-1-MA21012-034','1000245392');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>12</td>
	        		<td>2020秋季</td>
	        		<td>建筑学院</td>
		         	<td>ME22003</td>
		         	<td>中国传统艺术——篆刻、书法、水墨画体验与欣赏</td>
		         	<td>任选</td>
		         	<td>素质核心</td>
		         	<td>1.5</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>92.4</td>
		            <td></td>
		            <td>24</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8150181','2020-2021-1-ME22003-002','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>13</td>
	        		<td>2020秋季</td>
	        		<td>材料科学与工程学院</td>
		         	<td>MS22110</td>
		         	<td>力学概论</td>
		         	<td>任选</td>
		         	<td>素质选修</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>70</td>
		            <td></td>
		            <td>63</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8150719','2020-2021-1-MS22110-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>14</td>
	        		<td>2020秋季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11021</td>
		         	<td>思想道德修养与法律基础</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>2.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>81</td>
		            <td></td>
		            <td>115</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8283600','2020-2021-1-MX11021-005','1000253812');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>15</td>
	        		<td>2020秋季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11029</td>
		         	<td>“习近平新时代中国特色社会主义思想概论”（1）</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>90</td>
		            <td></td>
		            <td>44</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8215179','2020-2021-1-MX11029-006','1000261270');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>16</td>
	        		<td>2020秋季</td>
	        		<td>体育部</td>
		         	<td>PE13001</td>
		         	<td>体育</td>
		         	<td>必修</td>
		         	<td>体育</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>63</td>
		            <td></td>
		            <td>20</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8214902','2020-2021-1-PE13001-183','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>17</td>
	        		<td>2021春季</td>
	        		<td>学工处</td>
		         	<td>AD22011</td>
		         	<td>大学生心理健康</td>
		         	<td>任选</td>
		         	<td>素质核心</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>88</td>
		            <td></td>
		            <td>165</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8478148','2020-2021-2-AD22011-013','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>18</td>
	        		<td>2021春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS31107</td>
		         	<td>集合论与图论</td>
		         	<td>必修</td>
		         	<td>专业基础</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>79</td>
		            <td></td>
		            <td>45</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8454394','2020-2021-2-CS31107-010','1000261746');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>19</td>
	        		<td>2021春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33001</td>
		         	<td>专业解读</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>88</td>
		            <td></td>
		            <td>95</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8343115','2020-2021-2-CS33001-002','1000245251');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>20</td>
	        		<td>2021春季</td>
	        		<td>外国语学院</td>
		         	<td>FL11017</td>
		         	<td>翻译实践</td>
		         	<td>必修</td>
		         	<td>英语</td>
		         	<td>1.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>68.5</td>
		            <td></td>
		            <td>28</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8426662','2020-2021-2-FL11017-005','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>21</td>
	        		<td>2021春季</td>
	        		<td>智慧树</td>
		         	<td>IN22149M</td>
		         	<td>世界著名博物馆艺术经典</td>
		         	<td>任选</td>
		         	<td>MOOC</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>93</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8373579','2020-2021-2-IN22149M-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>22</td>
	        		<td>2021春季</td>
	        		<td>数学学院</td>
		         	<td>MA21004</td>
		         	<td>微积分B(2)</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>5.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>94</td>
		            <td></td>
		            <td>9</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8435384','2020-2021-2-MA21004-029','1000244778');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>23</td>
	        		<td>2021春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11022</td>
		         	<td>中国近现代史纲要</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>2.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>94</td>
		            <td></td>
		            <td>2</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8463878','2020-2021-2-MX11022-014','1000261740');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>24</td>
	        		<td>2021春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11025</td>
		         	<td>形势与政策（1）</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>0.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>91</td>
		            <td></td>
		            <td>10</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8331537','2020-2021-2-MX11025-063','1000261741');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>25</td>
	        		<td>2021春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11030</td>
		         	<td>“习近平新时代中国特色社会主义思想概论”（2）</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>84</td>
		            <td></td>
		            <td>90</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8389697','2020-2021-2-MX11030-021','1000261785');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>26</td>
	        		<td>2021春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX22111</td>
		         	<td>中国古代著名哲学家</td>
		         	<td>任选</td>
		         	<td>素质核心</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>91</td>
		            <td></td>
		            <td>31</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8406887','2020-2021-2-MX22111-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>27</td>
	        		<td>2021春季</td>
	        		<td>体育部</td>
		         	<td>PE13002</td>
		         	<td>体育</td>
		         	<td>必修</td>
		         	<td>体育</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>61</td>
		            <td></td>
		            <td>13</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8416227','2020-2021-2-PE13002-183','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>28</td>
	        		<td>2021春季</td>
	        		<td>物理学院</td>
		         	<td>PH21003</td>
		         	<td>大学物理B(1)</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>5.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>79.5</td>
		            <td></td>
		            <td>72</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8425643','2020-2021-2-PH21003-046','1000257915');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>29</td>
	        		<td>2021夏季</td>
	        		<td>电子与信息工程学院</td>
		         	<td>EI34034</td>
		         	<td>基于Windows界面的高级程序设计</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>1.5</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>96</td>
		            <td></td>
		            <td>6</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8493431','2020-2021-3-EI34034-003','1000269434');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>30</td>
	        		<td>2021夏季</td>
	        		<td>外国语学院</td>
		         	<td>FL22137</td>
		         	<td>英文魔幻影视作品选赏和讨论</td>
		         	<td>任选</td>
		         	<td>素质选修</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>90</td>
		            <td></td>
		            <td>17</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8472956','2020-2021-3-FL22137-007','0');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>31</td>
	        		<td>2021夏季</td>
	        		<td>好大学在线</td>
		         	<td>GO90004600</td>
		         	<td>生活中的货币时间价值</td>
		         	<td>任选</td>
		         	<td>MOOC</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>80.5</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8526798','2020-2021-3-GO90004600-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>32</td>
	        		<td>2021夏季</td>
	        		<td>好大学在线</td>
		         	<td>GO90005600</td>
		         	<td>中医药与中华传统文化</td>
		         	<td>任选</td>
		         	<td>MOOC</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>97</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8527404','2020-2021-3-GO90005600-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>33</td>
	        		<td>2021秋季</td>
	        		<td>建筑学院</td>
		         	<td>AR22102</td>
		         	<td>色彩美学</td>
		         	<td>任选</td>
		         	<td>素质核心</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>80</td>
		            <td></td>
		            <td>10</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8530782','2021-2022-1-AR22102-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>34</td>
	        		<td>2021秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS31105</td>
		         	<td>数字逻辑与数字系统设计</td>
		         	<td>限选</td>
		         	<td>专业基础</td>
		         	<td>3.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>82.9</td>
		            <td></td>
		            <td>45</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8600074','2021-2022-1-CS31105-004','1000268272');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>35</td>
	        		<td>2021秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS31109</td>
		         	<td>算法设计与分析</td>
		         	<td>必修</td>
		         	<td>专业基础</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>85.6</td>
		            <td></td>
		            <td>63</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8595491','2021-2022-1-CS31109-002','1000270963');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>36</td>
	        		<td>2021秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS31112</td>
		         	<td>数理逻辑</td>
		         	<td>必修</td>
		         	<td>专业基础</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>85.5</td>
		            <td></td>
		            <td>94</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8677743','2021-2022-1-CS31112-001','1000268271');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>37</td>
	        		<td>2021秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32132</td>
		         	<td>数据结构与算法</td>
		         	<td>限选</td>
		         	<td>专业基础</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>92</td>
		            <td></td>
		            <td>8</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8550231','2021-2022-1-CS32132-002','1000268276');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>38</td>
	        		<td>2021秋季</td>
	        		<td>外国语学院</td>
		         	<td>FL12039</td>
		         	<td>西方文明史</td>
		         	<td>必修</td>
		         	<td>英语</td>
		         	<td>1.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>76.2</td>
		            <td></td>
		            <td>9</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8587270','2021-2022-1-FL12039-006','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>39</td>
	        		<td>2021秋季</td>
	        		<td>生命科学与技术学院</td>
		         	<td>LS31070</td>
		         	<td>生物化学B</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>72.9</td>
		            <td></td>
		            <td>126</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8580103','2021-2022-1-LS31070-001','1000268392');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>40</td>
	        		<td>2021秋季</td>
	        		<td>数学学院</td>
		         	<td>MA21016</td>
		         	<td>概率论与数理统计B</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>3.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>89.5</td>
		            <td></td>
		            <td>20</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8509545','2021-2022-1-MA21016-001','1000268270');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>41</td>
	        		<td>2021秋季</td>
	        		<td>建筑学院</td>
		         	<td>ME22104</td>
		         	<td>视觉文化素养</td>
		         	<td>任选</td>
		         	<td>素质选修</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>80</td>
		            <td></td>
		            <td>24</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8555643','2021-2022-1-ME22104-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>42</td>
	        		<td>2021秋季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11024</td>
		         	<td>毛泽东思想和中国特色社会主义理论体系概论</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>4.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>79</td>
		            <td></td>
		            <td>50</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8662251','2021-2022-1-MX11024-024','1000269311');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>43</td>
	        		<td>2021秋季</td>
	        		<td>体育部</td>
		         	<td>PE13003</td>
		         	<td>体育</td>
		         	<td>必修</td>
		         	<td>体育</td>
		         	<td>0.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>71</td>
		            <td></td>
		            <td>13</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8620567','2021-2022-1-PE13003-073','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>44</td>
	        		<td>2021秋季</td>
	        		<td>物理学院</td>
		         	<td>PH21013</td>
		         	<td>大学物理实验B</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>91</td>
		            <td></td>
		            <td>61</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8594657','2021-2022-1-PH21013-003','1000267193');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>45</td>
	        		<td>2022春季</td>
	        		<td>马克思主义学院</td>
		         	<td>AD22144</td>
		         	<td>品读大秦帝国</td>
		         	<td>任选</td>
		         	<td>素质选修</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>92</td>
		            <td></td>
		            <td>12</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8760781','2021-2022-2-AD22144-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>46</td>
	        		<td>2022春季</td>
	        		<td>建筑学院</td>
		         	<td>AR22118</td>
		         	<td>欧洲经典艺术电影赏析</td>
		         	<td>任选</td>
		         	<td>素质选修</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>82</td>
		            <td></td>
		            <td>29</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8703838','2021-2022-2-AR22118-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>47</td>
	        		<td>2022春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32123</td>
		         	<td>软件构造</td>
		         	<td>必修</td>
		         	<td>专业核心</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>86</td>
		            <td></td>
		            <td>34</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8843528','2021-2022-2-CS32123-003','1000272629');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>48</td>
	        		<td>2022春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32124</td>
		         	<td>计算机系统</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>90.5</td>
		            <td></td>
		            <td>50</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8736919','2021-2022-2-CS32124-001','1000278202');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>49</td>
	        		<td>2022春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32125</td>
		         	<td>人工智能</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>93.6</td>
		            <td></td>
		            <td>4</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8829125','2021-2022-2-CS32125-005','1000278209');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>50</td>
	        		<td>2022春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32208</td>
		         	<td>信息安全概论</td>
		         	<td>必修</td>
		         	<td>专业基础</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>86</td>
		            <td></td>
		            <td>36</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8825623','2021-2022-2-CS32208-002','1000272624');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>51</td>
	        		<td>2022春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32209</td>
		         	<td>形式语言与自动机</td>
		         	<td>必修</td>
		         	<td>专业基础</td>
		         	<td>2.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>75.2</td>
		            <td></td>
		            <td>120</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8709577','2021-2022-2-CS32209-004','1000277049');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>52</td>
	        		<td>2022春季</td>
	        		<td>外国语学院</td>
		         	<td>FL12043</td>
		         	<td>走进北美文化</td>
		         	<td>必修</td>
		         	<td>英语</td>
		         	<td>1.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>73</td>
		            <td></td>
		            <td>10</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8827441','2021-2022-2-FL12043-002','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>53</td>
	        		<td>2022春季</td>
	        		<td>智慧树</td>
		         	<td>GO90012500</td>
		         	<td>互联网与营销创新</td>
		         	<td>任选</td>
		         	<td>创新MOOC</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>94</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8755538','2021-2022-2-GO90012500-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>54</td>
	        		<td>2022春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11032</td>
		         	<td>形势与政策（2）</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>89</td>
		            <td></td>
		            <td>64</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8805133','2021-2022-2-MX11032-054','1000274369');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>55</td>
	        		<td>2022春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11035</td>
		         	<td>马克思主义基本原理</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>91</td>
		            <td></td>
		            <td>9</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8835638','2021-2022-2-MX11035-036','1000274368');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>56</td>
	        		<td>2022春季</td>
	        		<td>体育部</td>
		         	<td>PE13004</td>
		         	<td>体育</td>
		         	<td>必修</td>
		         	<td>体育</td>
		         	<td>0.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>66</td>
		            <td></td>
		            <td>11</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8793539','2021-2022-2-PE13004-073','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>57</td>
	        		<td>2022夏季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33850E</td>
		         	<td>高级软件测试</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>69.4</td>
		            <td></td>
		            <td>89</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8863276','2021-2022-3-CS33850E-001','1000289479');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>58</td>
	        		<td>2022夏季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS34901</td>
		         	<td>企业短期实训</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>86</td>
		            <td></td>
		            <td>175</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8884947','2021-2022-3-CS34901-001','1000289485');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>59</td>
	        		<td>2022夏季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>SE90303100</td>
		         	<td>开源软件开发</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>1.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>68</td>
		            <td></td>
		            <td>130</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8865132','2021-2022-3-SE90303100-001','1000289483');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>60</td>
	        		<td>2022秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32126</td>
		         	<td>计算机组成原理</td>
		         	<td>必修</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>85.4</td>
		            <td></td>
		            <td>41</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8990506','2022-2023-1-CS32126-001','1000286126');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>61</td>
	        		<td>2022秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32461</td>
		         	<td>面向服务的软件系统</td>
		         	<td>选修</td>
		         	<td>专业核心</td>
		         	<td>4.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>89.1</td>
		            <td></td>
		            <td>14</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('9051767','2022-2023-1-CS32461-001','1000287087');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>62</td>
	        		<td>2022秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33311</td>
		         	<td>计算机系统安全</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>88.8</td>
		            <td></td>
		            <td>14</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8960882','2022-2023-1-CS33311-001','1000284840');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>63</td>
	        		<td>2022秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33451</td>
		         	<td>软件过程与工具</td>
		         	<td>选修</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>87.3</td>
		            <td></td>
		            <td>8</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8959067','2022-2023-1-CS33451-001','1000284834');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>64</td>
	        		<td>2022秋季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33501</td>
		         	<td>计算机网络</td>
		         	<td>限选</td>
		         	<td>其他</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>74.2</td>
		            <td></td>
		            <td>64</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8920526','2022-2023-1-CS33501-005','1000284837');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>65</td>
	        		<td>2022秋季</td>
	        		<td>智慧树</td>
		         	<td>GO90013000</td>
		         	<td>思辨与创新</td>
		         	<td>任选</td>
		         	<td>创新MOOC</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>60</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8978300','2022-2023-1-GO90013000-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>66</td>
	        		<td>2022秋季</td>
	        		<td>好大学在线</td>
		         	<td>IN22139M</td>
		         	<td>经济地理与企业兴衰</td>
		         	<td>任选</td>
		         	<td>MOOC</td>
		         	<td>2.0</td>
 		            <td> </td>
 		            <td> </td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>86</td>
		            <td></td>
		            <td></td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('8971995','2022-2023-1-IN22139M-001','');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>67</td>
	        		<td>2023春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS32465</td>
		         	<td>服务科学与工程</td>
		         	<td>选修</td>
		         	<td>专业核心</td>
		         	<td>4.5</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>81</td>
		            <td></td>
		            <td>26</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('9008013','2022-2023-2-CS32465-001','0');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>68</td>
	        		<td>2023春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33502</td>
		         	<td>编译系统</td>
		         	<td>限选</td>
		         	<td>专业核心</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>88.7</td>
		            <td></td>
		            <td>26</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('9103296','2022-2023-2-CS33502-003','1000293306');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr   >
	        		<td>69</td>
	        		<td>2023春季</td>
	        		<td>计算机科学与技术学院</td>
		         	<td>CS33503</td>
		         	<td>数据库系统</td>
		         	<td>限选</td>
		         	<td>专业核心</td>
		         	<td>3.0</td>
 		            <td>是</td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>97.9</td>
		            <td></td>
		            <td>4</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('9176926','2022-2023-2-CS33503-001','1000296351');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		  <!-- 是否及格：不及格样式为红色 -->
	        	<tr class="bgcol"  >
	        		<td>70</td>
	        		<td>2023春季</td>
	        		<td>马克思主义学院</td>
		         	<td>MX11033</td>
		         	<td>形势与政策（3）</td>
		         	<td>必修</td>
		         	<td>思政</td>
		         	<td>0.5</td>
 		            <td> </td>
 		            <td>是</td>
 		            <td>
		 			   
	 					 
	 					 
	 					 
					    		            
 		            </td>
		            <td>86</td>
		            <td></td>
		            <td>67</td>

		            <td>
		            	
		             		<div class="cz_button cz_see" title="查看"  onclick="javascript:queryCjView('9102699','2022-2023-2-MX11033-038','1000295539');"></div>
		             	     
		       		 </td>
	       		</tr>
	       		
              </table>
          </div>
        
        
        <div class="youtube"> 
        	
            
            
        </div>
        <div class="clr"></div>    
        <div style="color: red"></div>    
        <div class="clr"></div>    
           
    </div>
 </div>
 

<div id="divShowBox" style="display:none; width: 700px;border: 1px solid #2c4f72;-webkit-box-shadow: 0px 0px 5px #000;-moz-box-shadow: 0px 0px 5px #000;box-shadow: 0px 0px 5px #000; " >
        <div class="Floatleft Pct100 popup_bg">
            <div class="popup_left">详细信息</div>
         </div>
        <div class="clr"></div>
        <div class="popup">
		<iframe id="iframename_cj" name="iframename_cj" src="/jsp/student/pub/empty.jsp" border="0" framespacing="0" marginheight="0" marginwidth="0" style="width: 680px; height: 300px;" frameborder="0" allowTransparency="true"></iframe>
        <div class="clr"></div> 
        <table   width="100%"  cellpadding="0" cellspacing="0"  class="mt10" style="border-collapse:collapse">
            <tr>
                <td align="center">
                	<div class="addlist_button1" style="float:right">
                		<a href="javascript:onQx();"><span>取消</span></a> 
                	</div>
                 </td>
            </tr>
        </table>
        <div class="clr"></div>
    </div>
 </div>
<div id="setting"></div>
</body>
</html>

`
console.log(getFormData(s));
