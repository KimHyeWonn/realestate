import React, { Component } from 'react';
import { Header, Button, Popup, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './ResultPage.css';

class ResultPage extends Component {
    render() {
        return (
            <div>
                <Popup trigger={<Button>조건 선택</Button>} position='bottom center'on='click' hideOnScroll>
                <div className="popupDiv"></div>
                    <Grid centered divided columns={1}>
                        <Grid.Column textAlign='center'>
                            <Header as='h4'>테마욥</Header>
                            {/* <Grid reversed='computer' columns='equal'>
                            <Grid.Row>
                            <Grid doubling columns={5}>
                            <Grid.Column><img src="http://yaimg.yanolja.com/files/2016/0531/20160531160842be1b2cf3-c4c9-41f0-819a-2e154ff42998.png"/></Grid.Column>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/1227/2016122716312890e9b5d9-555f-454a-aee5-f4d84df542df.png"/></Grid.Column>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/0531/2016053116284060f47da1-2758-4785-8bb3-9dd0ce19515a.png"/></Grid.Column>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/0823/201608231726338cbbc691-3d7a-448b-8fcd-2b6cb9b2ca09.png"/></Grid.Column>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/1130/201611301434072bb5408d-ed80-4ce1-ba6b-a2f94abb373d.png"/></Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/1206/20161206190514f565074b-4186-4394-89dd-64bf8aaa35a8.png"/></Grid.Column>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/0823/201608231713376358de44-d900-4263-9327-6bba7c29fb2b.png"/></Grid.Column>
                            <Grid.Column><img src="//yaimg.yanolja.com/files/2016/0531/20160531161236fa3f3ad9-838b-47b6-8538-790c19f423b0.png"/></Grid.Column>
                            </Grid.Row>
                            </Grid> */}
                             <ul className="imgUl">
                                {/* <li><label><img src="http://yaimg.yanolja.com/files/2016/0531/20160531160842be1b2cf3-c4c9-41f0-819a-2e154ff42998.png" alt="공주풍"/>
                                <input type="checkbox" id="pr" value="pr"/><span>공주풍</span></label></li> */}
                                <li><img src="http://yaimg.yanolja.com/files/2016/0531/20160531160842be1b2cf3-c4c9-41f0-819a-2e154ff42998.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/1227/2016122716312890e9b5d9-555f-454a-aee5-f4d84df542df.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/0531/2016053116284060f47da1-2758-4785-8bb3-9dd0ce19515a.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/0823/201608231726338cbbc691-3d7a-448b-8fcd-2b6cb9b2ca09.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/1130/201611301434072bb5408d-ed80-4ce1-ba6b-a2f94abb373d.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/1206/20161206190514f565074b-4186-4394-89dd-64bf8aaa35a8.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/0531/20160531161236fa3f3ad9-838b-47b6-8538-790c19f423b0.png"/></li>
                                <li><img src="//yaimg.yanolja.com/files/2016/0823/201608231713376358de44-d900-4263-9327-6bba7c29fb2b.png"/></li>
                            </ul> 
                           
                            
                            {/* <p>
                                 projects, $10 a monthdfsfsdfsdddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                            </p> */}
                            

                            <Button>선택</Button>
                        </Grid.Column>
                        
                    </Grid>
                </Popup>

            </div>
        );
    }
}

export default ResultPage;