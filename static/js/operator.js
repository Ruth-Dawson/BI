// 后台运营人员修改数据
function contribute() {
    // 服务组织总数
    if ($("#orgNum").val() !== "") {
        $("#organize-number").text($("#orgNum").val());
    }
    // 综合体
    if ($("#subOrgNum-01").val() !== "") {
        $("#organize-number-01").text($("#subOrgNum-01").val());
    }
    // 居家
    if ($("#subOrgNum-02").val() !== "") {
        $("#organize-number-02").text($("#subOrgNum-02").val());
    }
    // 机构
    if ($("#subOrgNum-03").val() !== "") {
        $("#organize-number-03").text($("#subOrgNum-03").val());
    }
    // 残疾人之家
    if ($("#subOrgNum-04").val() !== "") {
        $("#organize-number-04").text($("#subOrgNum-04").val());
    }

    // 服务团队总数
    if ($("#teamNum").val() !== "") {
        $("#serverTeam-number").text($("#teamNum").val());
    }
    // 志愿者
    if ($("#subTeamNum-01").val() !== "") {
        $("#serverTeam-number-01").text($("#subTeamNum-01").val());
    }
    // 护理员
    if ($("#subTeamNum-02").val() !== "") {
        $("#serverTeam-number-02").text($("#subTeamNum-02").val());
    }
    // 护理员
    if ($("#subTeamNum-03").val() !== "") {
        $("#serverTeam-number-03").text($("#subTeamNum-03").val());
    }

    // 服务对象总数
    if ($("#severNum").val() !== "") {
        $("#serverObj").text($("#severNum").val());
    }
    // 男性
    if ($("#subSeverNum-01").val() !== "") {
        $("#serverObj-01").text($("#subSeverNum-01").val() + "%");
    }
    // 女性
    if ($("#subSeverNum-02").val() !== "") {
        $("#serverObj-02").text($("#subSeverNum-02").val() + "%");
    }

    // 服务数据总数
    if ($("#dataNum").val() !== "") {
        $("#serData").text($("#dataNum").val());
    }
    // 站点服务
    if ($("#subDataNum-01").val() !== "") {
        $("#serData-01").text($("#subDataNum-01").val());
    }
    // 上门服务
    if ($("#subDataNum-02").val() !== "") {
        $("#serData-02").text($("#subDataNum-02").val());
    }
}


// 服务团队
function serverTeam() {
    if ($("#pension-01").val() !== "") {
        $("#people-01").text($("#pension-01").val());
    }
    if ($("#pension-02").val() !== "") {
        $("#people-02").text($("#pension-02").val());
    }
    if ($("#pension-03").val() !== "") {
        $("#people-03").text($("#pension-03").val());
    }
}


// 服务数据
function serveData() {
    //居家
    // 获取输入的数值 
    //     --pension01--总服务量
    //     --pension02--站点服务量
    //     --pension03--上门服务量
    var pensionNum01 = $("#pensionNum-01").val();
    var pensionNum02 = $("#pensionNum-02").val();
    var pensionNum03 = $("#pensionNum-03").val();
    // 将数值每一位拆分进数组
    //     --numDig01--总服务量位数
    //     --numDig02--站点服务量位数
    //     --numDig03--上门服务量位数
    function split(number) {
        var arr = [];
        if (number !== "") {
            for (const i in number) {
                arr.push(number[i]);
            }
        }
        return arr;
    }
    var numDig01 = split(pensionNum01);
    var numDig02 = split(pensionNum02);
    var numDig03 = split(pensionNum03);

    console.log(numDig01);

    // 获取总服务量容器----digit01
    // 站点服务量容器----digit02
    // 上门服务量容器----digit03
    var digit01 = $(".all-number .clock-start");
    var digit02 = $(".station-number .clock-start");
    var digit03 = $(".visit-number .clock-start");

    //  依次从最后一位赋值
    function assignment(digit, num, posi) {
        var j = digit.length - 1;
        console.log(posi);
        for (let i = num.length - 1; i >= 0; i--) {
            $(digit[j--]).attr("src", "../static/img/time" + posi + "-" + num[i] + ".png");
        }

    }

    assignment(digit01, numDig01, 1);
    assignment(digit02, numDig02, 2);
    assignment(digit03, numDig03, 3);




    // 机构
    if ($("#insiNum-01").val() !== "") {
        $("#ins-01").text($("#insiNum-01").val());
    }
    if ($("#insiNum-02").val() !== "") {
        $("#ins-02").text($("#insiNum-02").val());
    }
    if ($("#insiNum-03").val() !== "") {
        $("#ins-03").text($("#insiNum-03").val());
    }
    // 运营中心
    if ($("#manageNum-01").val() !== "") {
        $("#oper-01").text($("#manageNum-01").val());
    }
    if ($("#manageNum-02").val() !== "") {
        $("#oper-02").text($("#manageNum-02").val());
    }
    if ($("#manageNum-03").val() !== "") {
        $("#oper-03").text($("#manageNum-03").val());
    }
}