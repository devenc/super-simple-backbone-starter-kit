// 收支
define(function(){
    var Payment = Backbone.Model.extend({
        income: {// 收入
            salary: 0,// 工资
            property: 0,// 房产
            interest: 0,// 利息
            dividend: 0,// 股息
            business: 0,// 生意
            D2U: 0// D2U
        },
        totalIncome: 0,// 总收入
        expenditure: {// 支出
            tax: 0,// 税收
            realEstateLoans: 0,// 房产贷款
            studentLoans: 0,// 助学贷款
            autoLoans: 0,// 汽车贷款
            creditCardSpending: 0,// 信用卡支出
            retailSpending: 0,// 零售支出
            childrenSpending: 0// 孩子支出
        },
        totalExpenditure: 0,// 总支出
        totalPayments: 0,//总计
        passiveIncome: 0// 被动收入
    });

    return Payment;
})