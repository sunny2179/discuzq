<template>
  <section>
    <div>
      <van-checkbox-group v-model="result" ref="checkboxGroup">
        <div class v-for="(item,index) in themeList" :key="index">
          <div class="cirPostCon">
            <div class>
              <div class="postTop">
                <div class="postPer">
                  <div class="avatar-box" >
                    <img
                      :src="item.user._data.avatarUrl"
                      @click="jumpPerDet(item.user._data.id)"
                      class="user-img"
                      v-if="item.user && item.user._data.avatarUrl"
                    />
                    <img
                      :src="appConfig.staticBaseUrl+'/images/noavatar.gif'"
                      class="postHead"
                      v-else
                      @click="jumpPerDet(item.user._data.id)"
                    />
                    <img v-if="item.user._data.isReal" class="icon-yirenzheng" src="/static/images/authIcon.svg" alt="实名认证">
                  </div>


                  <div class="perDet">
                    <div
                      class="perName"
                      v-if="item.user"
                      @click="jumpPerDet(item.user._data.id)">
                      {{item.user._data.username}}
                      <span class="groupsName" v-if="item.user._data.showGroups">({{item.user.groups[0]._data.name}})</span>
                    </div>
                    <div class="perName" v-else>该用户已被删除</div>
                    <div
                      class="postTime"
                    >{{$dayjs(item._data.createdAt).format('YYYY-MM-DD HH:mm')}}</div>
                  </div>
                </div>
                <div class="postOpera">
                  <span
                    class="icon iconfont icon-top"
                    v-if="item._data.isSticky"
                    v-show="isTopShow"
                  ></span>
                  <div
                    class="screen"
                    ref="screenDiv"
                    @click.stop="bindScreen(index,$event)"
                    v-if="isMoreShow && (item._data.canEssence || item._data.canSticky || item._data.canDelete || item._data.canEdit || item.firstPost._data.canLike)"
                  >
                    <div class="moreCli">
                      <span class="icon iconfont icon-more"></span>
                    </div>
                    <div class="themeList" v-show="indexlist==index">
                      <a
                        href="javascript:;"
                        @click="replyOpera(item.firstPost._data.id,2,item.firstPost._data.isLiked,index)"
                        v-if="item.firstPost._data.canLike && item.firstPost._data.isLiked"
                      >取消点赞</a>
                      <a
                        href="javascript:;"
                        @click="replyOpera(item.firstPost._data.id,2,item.firstPost._data.isLiked,index)"
                        v-if="item.firstPost._data.canLike && !item.firstPost._data.isLiked"
                      >点赞</a>

                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,3,item._data.isEssence,index)"
                        v-if="item._data.canEssence && item._data.isEssence"
                      >取消加精</a>
                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,3,item._data.isEssence,index)"
                        v-if="item._data.canEssence && !item._data.isEssence"
                      >加精</a>

                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,4,item._data.isSticky,index)"
                        v-if="item._data.canSticky && item._data.isSticky"
                      >取消置顶</a>
                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,4,item._data.isSticky,index)"
                        v-if="item._data.canSticky && !item._data.isSticky"
                      >置顶</a>

                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,6,item._data.type)"
                        v-if="item.firstPost._data.canEdit"
                      >编辑</a>
                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,7)"
                        v-if="item._data.canReply"
                      >回复</a>

                      <a
                        href="javascript:;"
                        @click="themeOpera(item._data.id,5,'',index)"
                        v-if="item._data.canDelete"
                      >删除</a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="postContent listPostCon"
                v-if="item.firstPost && item._data.type == 1"
                @click="jumpThemeDet(item._data.id,item._data.canViewPosts)"
              >
                <!-- <a href="javascript:;">{{item._data.title}}</a> -->
                <span class="postConTitle">{{item._data.title}}</span>
                <span class="icon iconfont icon-longtext" v-if="item._data.type == 1"></span>
                <!-- <span class="icon iconfont icon-longtext" v-if="item._data.type == 1 && item._data.price<=0"></span> -->
                <!-- <span class="icon iconfont icon-money1" v-else-if="item._data.price>0"></span> -->
              </div>
              <div
                class="postContent"
                v-else-if="item.firstPost && item._data.type == 0"
                @click="jumpThemeDet(item._data.id,item._data.canViewPosts)"
                v-html="item.firstPost._data.contentHtml"
              ></div>
              <div
                class="postContent"
                v-if="item.firstPost && item._data.type == 2"
                @click="jumpThemeDet(item._data.id,item._data.canViewPosts)"
              >
                <span class="postConTitle block" v-html="item.firstPost._data.contentHtml"></span>
                <div
                  class="videoCoverBox"
                  v-if="item.threadVideo && item.threadVideo._data.status == 1"
                >
                  <span class="icon iconfont icon-play"></span>
                  <div class="videoCoverMask"></div>
                  <!-- <img
                    v-if="item.threadVideo"
                    :src="item.threadVideo._data.cover_url"
                    alt="视频封面"
                    class="videoCover"
                  /> -->
                    <van-image
                      v-if="item.threadVideo"
                      lazy-load
                      class="videoCover"
                      :src="item.threadVideo._data.cover_url"
                      fit="scale-down"
                      alt="视频封面"
                    />
                </div>
              </div>
              <div
                class="themeImgBox"
                v-if="item.firstPost.imageList && item.firstPost.imageList.length>0"
                @click="jumpThemeDet(item._data.id,item._data.canViewPosts)"
              >
                <div class="themeImgList moreImg">
                  <van-image
                    fit="cover"
                    lazy-load
                    v-for="(image,imgIndex)  in item.firstPost.imageList"
                    :src="image"
                    class="themeImgChild"
                    :key="imgIndex"
                    v-if="imgIndex < 9"
                  ></van-image>
                </div>
              </div>
            </div>
            <div class="operaBox">
              <div
                class="isrelationGap"
                v-if="item.firstPost.likedUsers.length>0 || item.rewardedUsers.length>0"
              ></div>
              <div class="likeBox" v-if="item.firstPost.likedUsers.length>0">
                <span class="icon iconfont icon-praise-after"></span>
                <span v-html="userArr(item.firstPost.likedUsers)"></span>
                <!-- <a  @click="jumpPerDet(like._data.id)">
                {{userArr(item.firstPost.likedUsers)}}</a>-->
                <i v-if="item.firstPost._data.likeCount>10">
                  &nbsp;等
                  <span>{{item.firstPost._data.likeCount}}</span>个人觉得很赞
                </i>
              </div>

              <div class="reward" v-if="item.rewardedUsers.length>0">
                <span class="icon iconfont icon-money"></span>
                <span v-html="userArr(item.rewardedUsers)"></span>
                <!-- <a @click="jumpPerDet(reward._data.id)">{{userArr(item.rewardedUsers)}}</a> -->
              </div>

              <div
                class="isrelationLine"
                v-if="(item.lastThreePosts.length>0 && item.firstPost.likedUsers.length>0) || (item.lastThreePosts.length>0 && item.rewardedUsers.length>0)"
              ></div>

              <div class="replyBox" v-if="item.lastThreePosts.length>0">
                <div
                  class="replyCon"
                  v-for="(reply,repIndex) in item.lastThreePosts"
                  :key="repIndex"
                >
                  <a
                    href="javascript:;"
                    v-if="reply.user"
                    @click="jumpPerDet(reply.user._data.id)"
                  >{{reply.user._data.username}}</a>
                  <a href="javascript:;" v-else>该用户已被删除</a>
                  <span class="font9" v-if="reply._data.replyUserId">回复</span>
                  <!-- <span class="font9" v-else=""></span> -->
                  <a
                    href="javascript:;"
                    v-if="reply._data.replyUserId && reply.replyUser"
                    @click="jumpPerDet(reply.user._data.id)"
                  >{{reply.replyUser._data.username}}</a>
                  <a
                    href="javascript:;"
                    v-else-if="reply._data.replyUserId && !reply.replyUser"
                  >该用户已被删除</a>
                  <span v-html="reply._data.contentHtml"></span>
                </div>
                <a
                  @click="jumpThemeDet(item._data.id,item._data.canViewPosts)"
                  class="allReply"
                  v-if="item._data.postCount>4"
                >
                  全部{{item._data.postCount-1}}条回复
                  <span class="icon iconfont icon-right-arrow"></span>
                </a>
              </div>
            </div>
            <van-checkbox
              v-if="ischeckShow"
              class="memberCheck"
              :name="item._data.id"
              ref="checkboxes"
            />
          </div>
          <div class="gap"></div>
        </div>
        <div
          class="manageFootFixed choFixed"
          v-if="ischeckShow"
          :style="{'width': (!isPhone && !isWeixin) ? '640px' : '100%','left': (!isPhone && !isWeixin) ? (viewportWidth - 640)/2+'px' : '0'}"
        >
          <a href="javascript:;" @click="checkAll">全选</a>
          <a href="javascript:;" @click="signOutDele">取消全选</a>
          <button class="checkSubmit" @click="deleteAllClick">删除选中</button>
        </div>
      </van-checkbox-group>
    </div>

    <van-image-preview v-model="imageShow" :images="priview" @change="onChange">
      <template v-slot:index>第{{ index }}页</template>
    </van-image-preview>
  </section>
</template>
<script>
import themeDet from "../../../controllers/m_site/common/themeDetCon";
// import '../../../scss/m_site/mobileIndex.scss';
import "../../../defaultLess/m_site/common/common.less";
import "../../../defaultLess/m_site/modules/circle.less";
export default {
  name: "themeDetView",
  ...themeDet
};
</script>
