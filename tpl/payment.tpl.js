define(function(){
    return '<div class="hero-unit"> \
			<h1>收入</h1> \
			<p>工资:<%=income.salary%></p> \
			<p>房产:<%=income.property%></p> \
			<p>利息:<%=income.interest%></p> \
			<p>股息:<%=income.dividend%></p> \
			<p>工资:<%=income.business%></p> \
			<p>生意:<%=income.D2U%></p> \
			<h3>总收入:<%=totalIncome%></h3> \
			<h1>支出</h1> \
			<p>税收:<%=expenditure.tax%></p> \
			<p>房产贷款:<%=expenditure.realEstateLoans%></p> \
			<p>助学贷款:<%=expenditure.studentLoans%></p> \
			<p>汽车贷款:<%=expenditure.autoLoans%></p> \
			<p>信用卡支出:<%=expenditure.creditCardSpending%></p> \
			<p>零售支出:<%=expenditure.retailSpending%></p> \
			<p>孩子支出:<%=expenditure.childrenSpending%></p> \
			<h3>总支出:<%=totalExpenditure%></h3> \
			<h3>总计:<%=totalPayments%></h3> \
			<h1>被动收入:<%=passiveIncome%></h1> \
		</div>';
});   