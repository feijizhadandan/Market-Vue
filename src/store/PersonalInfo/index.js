const personalInfo = {
    state: {
        // 用户基本信息
        userDetails: {
            id: -1,
            userName: '飞机炸弹',
            introduction: "你好，我是飞机炸弹",
            photoUrl: "https://pic2.zhimg.com/v2-cd4c7ce9f3ba888cd20ff5d8c81590a1_r.jpg",
            address: "小谷围派出所",
            gender: 2,  // 1：男 2：女
            phone: "13248957845",
            email: "215628266@qq.com",
            followerCount: 0,
            experienceValue: 0,
        }
    },
    getters: {
        getUserName(state) {
            return state.userDetails.userName
        }
    },
    mutations: {
        changePhotoUrl(state, para) {
            state.photoUrl = para
        }
    },
    actions: {
    
    },
}

export default personalInfo