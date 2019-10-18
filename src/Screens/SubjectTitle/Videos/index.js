/*Example of React Native Video*/
import React, { Component } from "react";
//Import React
import { Platform, StyleSheet, Text, View } from "react-native";
//Import Basic React Native Component
import Video from "react-native-video";
//Import React Native Video to play video
import MediaControls, { PLAYER_STATES } from "react-native-media-controls";
//Media Controls to control Play/Pause/Seek and full screen

class RNVideo extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: "contain",
      fullScreen: false,
      video: ""
    };
  }

  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
      playerState
    });
  };

  // componentDidMount() {
  //   // const { Video1 } = this.props.navigation.state.params.Video1;
  //   // this.setState({
  //   //   video1: Video1
  //   // });

  //   console.log(this.props.navigation.state.params, ">>");
  //   // setTimeout(() => {
  //   //   this.setState({ loader: false, title: subject, definition });
  //   // }, 3000);
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { title } = nextProps.navigation.state.params;

    console.log(title, "titel is here");
    return {
      video: title
    };
  }

  onReplay = () => {
    //Handler for Replay
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };

  onLoad = data => this.setState({ duration: data.duration, isLoading: false });

  onLoadStart = data => this.setState({ isLoading: true });

  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

  onError = () => alert("Oh! ", error);

  exitFullScreen = () => {
    alert("Exit full screen");
  };

  enterFullScreen = () => {};

  onFullScreen = () => {
    const { screenType, fullScreen } = this.state;

    if (screenType == "contain")
      this.setState({ screenType: "contain", fullScreen: !fullScreen });
    else this.setState({ screenType: "contain", fullScreen: false });
  };
  renderToolbar = () => <View>{/* <Text> toolbar </Text> */}</View>;
  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    const { screenType, fullScreen, video1, video } = this.state;

    return (
      <View style={styles.container}>
        <View style={fullScreen ? { flex: 1 } : { height: "50%" }}>
          <Video
            onEnd={this.onEnd}
            onLoad={this.onLoad}
            onLoadStart={this.onLoadStart}
            onProgress={this.onProgress}
            paused={this.state.paused}
            ref={videoPlayer => (this.videoPlayer = videoPlayer)}
            resizeMode={this.state.screenType}
            onFullScreen={this.state.isFullScreen}
            source={{
              uri:
                video == "physic1"
                  ? "http://engage24x7.com/deaplearning/videos/physic1.mp4"
                  : video == "physic2"
                  ? "http://engage24x7.com/deaplearning/videos/physic2.mp4"
                  : video == "Mathematics"
                  ? "http://engage24x7.com/deaplearning/videos/math.mp4"
                  : video == "English"
                  ? "http://engage24x7.com/deaplearning/videos/eng.mp4"
                  : video == "Biology"
                  ? "http://engage24x7.com/deaplearning/videos/bio.mp4"
                  : alert("Video not found")
            }}
            style={styles.mediaPlayer}
            volume={12}
          />
          <MediaControls
            duration={this.state.duration}
            isLoading={this.state.isLoading}
            mainColor="#333"
            onFullScreen={this.onFullScreen}
            onPaused={this.onPaused}
            onReplay={this.onReplay}
            onSeek={this.onSeek}
            onSeeking={this.onSeeking}
            playerState={this.state.playerState}
            progress={this.state.currentTime}
            toolbar={this.renderToolbar()}
            isFullScreen={false}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5
  },
  mediaPlayer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "black"
  }
});
export default RNVideo;
