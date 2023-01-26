import React, { useRef, useEffect } from "react";
import VideoJs from 'video.js';
import 'video.js/dist/video-js.css';


export default function VideoJS() {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = VideoJs(
      videoRef.current,
      {
        autoplay: false, // 自动播放
        muted: false, //静音
        preload: 'auto', // 预加载
        controls: true, // 是否显示控制条
        controlBar: {
          // 设置控制条组件
          // /* 设置控制条里面组件的相关属性及显示与否
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true, // 显示倒计时时间
          fluid: true,
          language: 'zh-CN', // 设置语言
          volumePanel: {
            inline: false,
          },
          /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
          children: [
            { name: 'playToggle' }, // 播放按钮
            { name: 'currentTimeDisplay' }, // 当前已播放时间
            { name: 'progressControl' }, // 播放进度条
            { name: 'durationDisplay' }, // 总时间
            {
              // 倍数播放
              name: 'playbackRateMenuButton',
              playbackRates: [0.5, 1, 1.5, 2, 2.5],
            },
            {
              name: 'volumePanel', // 音量控制
              inline: false, // 不使用水平方式
            },
            { name: 'FullscreenToggle' }, // 全屏
          ],
        },
      },
      () => {
        player.src('https://vjs.zencdn.net/v/oceans.mp4');
        player.poster('https://vjs.zencdn.net/v/oceans.png');
      },
    );
  })

  return (
    <div>
      <video
        ref={videoRef}
        preload="true"
        playsInline
        className={['video-js', 'vjs-16-9', 'vjs-big-play-centered'].join(' ')}
      >
      </video>
    </div>
  );
}