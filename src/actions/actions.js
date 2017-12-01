import { Modal } from 'antd';

export const PRE_IMG = 'PRE_IMG'
export const NXT_IMG = 'NXT_IMG'
export const DIS_IMG = 'DIS_IMG'

let flaging = 0
function fetchapi(url, methods = 'GET', data) {
    // sessionStorage.setItem('cryp', btoa('emile2636:5k4g4Git'))
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8")
    if (sessionStorage.getItem('cryp')) {
        myHeaders.append("Authorization", "Basic " + sessionStorage.getItem('cryp'))
    }
    myHeaders.append("Accept", "application/vnd.github.mercy-preview+json")
    let config = {
        'method': methods,
        'headers': myHeaders
    }

    if (data) {
        config.body = JSON.stringify(data);
    }
    return new Promise((go, no)=>{
        fetch(url, config).then(res=>{
            if(res.ok){
                go(res)
            }else{
                if(res.status===401||res.status===403||res.status===404){
                    if(!sessionStorage.getItem('cryp') && sessionStorage.getItem('page')!=='home'){
                        flaging++
                        needLogin(flaging)
                    }
                }
                go(res)
            }
        })
    })
}

//need login
function needLogin(flag){
    if(flag===1)
    Modal.error({
        title: '請登入以獲得完整功能',
        content: '請以GitHub帳號登入本網站取得完整功能',
        okText: 'OK',
        okType: 'danger',
        onOk() {
            flaging=0
        },
      });
}

export function showLoginModal(boo){
    return {
        type:'LOGIN_MOD',
        display:boo
    }
}

//user
export function setUser(json){
    return {
        type:'SET_USER',
        user:json
    }
}

function deUser(){
    return {
        type:'DEL_USER'
    }
}

export function doLogout(){
    return dispatch=>{
        dispatch(deUser())
        sessionStorage.clear()
    }
}

//login
export function doLogin(cryp) {
    sessionStorage.setItem('cryp', cryp)
    return dispatch=>{
        return new Promise((resolve, reject) => {
            fetchapi('https://api.github.com/user').then(res => {
                if (res.ok) {
                    let usr = res.json()
                    usr.then(user=>{
                        sessionStorage.setItem('user_name', user.login)
                        sessionStorage.setItem('avatar_url', user.avatar_url)
                        dispatch(setUser(user))
                    })
                    return resolve(usr)
                } else {
                    sessionStorage.clear()
                    return reject(res.json())
                }
            }).catch(err=>console.log(err))
        })
    }
}

//switch page
export function switchPage(page) {
    sessionStorage.setItem('page',page)
    return {
        type: 'SWITCH',
        page: page
    }
}

//banner img
export function nxtimg() {
    return {
        type: NXT_IMG
    }
}

export function preimg() {
    return {
        type: PRE_IMG
    }
}

export function displayImg(show) {
    return {
        type: DIS_IMG,
        show: show
    }
}

//repos
function requestRepos() {
    return {
        type: 'REQUEST_REPO'
    }
}

function receiveRepos(json) {
    return {
        type: 'RECEIVE_REPO',
        repos: json
    }
}

function getTitleImg(json = []) {
    return Promise.all(
        json.map(elm => {
            return fetchapi('https://api.github.com/repos/twoss-io/' + elm.name + '/contents/title_img.png').then((response) => {
                return response.json()
            }).then((res) => {
                let url = res.html_url ? res.html_url + '?raw=true' : require('../img/markus-spiske-221494.jpg')
                elm.img = url
                return elm
            })
        })
    ).then(res => {
        return res
    }).catch(err => console.log(err))
}

function getMd(json = []) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json; charset=utf-8")
    myHeaders.append("Authorization", "Basic " + btoa("emile2636:5k4g4Git"))
    myHeaders.append("Accept", "application/vnd.github.VERSION.html")
    let config = {
        'method': 'GET',
        'headers': myHeaders
    }

    let fechMd = url => {
        return fetch(url, config)
    }

    return Promise.all(
        json.map(elm => {
            return fechMd('https://api.github.com/repos/twoss-io/' + elm.name + '/readme').then((response) => {
                if (response.ok) {
                    return response.text()
                } else {
                    return '<h3>目前暫無資料</h3>'
                }
            }).then((res) => {
                elm.md = res
                return elm
            })
        })
    ).then(res => {
        return res
    }).catch(err => console.log(err))
}

export function fetchRepos(suger = '') {
    return dispatch => {
        return new Promise((resolve, reject)=>{
            dispatch(requestRepos())
            fetchapi(`https://api.github.com/users/twoss-io/repos` + suger).then((response) => {
                if(response.ok){
                    resolve(response)
                }else{
                    reject(response)
                }
                return response.json()
            }).then(json => {
                return getTitleImg(json)
            }).then(json => {
                return getMd(json)
            }).then(json => {
                return dispatch(receiveRepos(json))
            }).catch(err => console.log(err))
        })
    }
}

//md info
export function setInfo(md) {
    return {
        type: 'SET_INFO',
        md: md
    }
}

export function cancelInfo() {
    return {
        type: 'CAN_INFO',
        show: false
    }
}

//issues
function requestIssues() {
    return {
        type: 'REQUEST_ISS'
    }
}

function receiveIssues(repo, json) {
    return {
        type: 'RECEIVE_ISS',
        repo: repo,
        issues:json
    }
}

export function fetchIssues(repo) {
    return dispatch => {
        dispatch(requestIssues())
        fetchapi('https://api.github.com/repos/twoss-io/' + repo + '/issues').then((res) => {
            return res.json()
        }).then(res => {
            return dispatch(receiveIssues(repo, res))
        }).catch(err => console.log(err))
    }
}

export function postIssues(repo, data={title:'', body:''}) {
    return dispatch => {
        return new Promise((resolve, reject)=>{
            fetchapi('https://api.github.com/repos/twoss-io/' + repo + '/issues', 'POST', data).then((res) => {
                if (res.ok) {
                    resolve(res.json())
                } else {
                    reject(res.json())
                }
            }).catch(err =>{
                console.log(err)
            })
        })
    }
}

//comments
function requestCom() {
    return {
        type: 'REQUEST_COM'
    }
}

function receiveCom(issue, json) {
    return {
        type: 'RECEIVE_COM',
        issue: issue,
        comments:json
    }
}

export function fetchCom(repo, issue) {
    return dispatch => {
        dispatch(requestCom())
        fetchapi('https://api.github.com/repos/twoss-io/' + repo + '/issues/'+issue+'/comments').then((res) => {
            return res.json()
        }).then(res => {
            return dispatch(receiveCom(repo+issue, res))
        }).catch(err => console.log(err))
    }
}

export function postCom(repo, issue, data={body:''}) {
    return dispatch => {
        return new Promise((resolve, reject)=>{
            fetchapi('https://api.github.com/repos/twoss-io/' + repo + '/issues/'+issue+'/comments', 'POST', data).then((res) => {
                if (res.ok) {
                    resolve(res.json())
                } else {
                    reject(res.json())
                }
            }).catch(err =>{
                console.log(err)
            })
        })
    }
}