import React from 'react';
import 'antd/dist/antd.css';
// import { Input, Button, List } from 'antd';

const Footer = props => {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="left">
                    <p>公司地址：郑州市南阳路192号升龙汇金广场9楼907室</p>
                    <p>咨询热线：0371-56775558 或 18039551558</p>
                    <p>电子邮箱：326075031@qq.com</p>
                    <p>版权所有：郑州驰建科技有限公司</p>
                    <p>ICP备案：豫ICP备18032771号</p>
                </div>
                <div className="right">
                    <h2>
                        <img
                            src="http://zhihui.zzdingyun.com/app/cj/static/img/erweima.2fe6864.png"
                            alt="二维码"
                        />
                        <p>请用钉钉扫一扫</p>
                        <p>加入魔点实名制服务群</p>
                    </h2>
                    <h2>
                        <img
                            src="http://zhihui.zzdingyun.com/app/cj/static/img/dingqr.482ddaa.jpg"
                            alt="二维码"
                        />
                        <p>请用钉钉扫一扫</p>
                        <p>诚邀贵公司使用钉钉</p>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;
