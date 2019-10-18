import React, { Component } from "react";
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  RefreshControl
} from "react-native";

// FILES
import NavigationDrawerStructure from "../Navigation/student/stackNav";
import { withNavigation } from "react-navigation";
import { Colors } from "../Constant/color";

// PACKAGES
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

let HEADER_MAX_HEIGHT = 100;
let HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 30 : 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class ParallexHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
      ),
      refreshing: false,
      shouldTitleRender: null
    };
  }

  static defaultProps = {
    defaultHeaderImage: null,
    defaultHeaderColor: null,
    leftIcon: null,
    rightIcon: null,
    title: null,
    titleStyle: null
  };

  render() {
    const {
      defaultHeaderImage,
      defaultHeaderColor,
      leftIcon,
      title,
      rightIcon,
      titleStyle
    } = this.props;

    const { shouldTitleRender } = this.state;

    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: "clamp"
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: "clamp"
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: "clamp"
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: "clamp"
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -8],
      extrapolate: "clamp"
    });

    return (
      <View style={styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={styles.fill}
          scrollEventThrottle={1}
          ref={c => {
            this.scroll = c;
          }}
          // onScroll={e =>
          //   this.setState({ shouldTitleRender: true })
          // }
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 500);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT
          }}
        >
          {this.props._renderScrollViewContent()}
        </Animated.ScrollView>
        <Animated.View
          pointerEvents="none"
          style={[
            styles.header,
            defaultHeaderColor,
            { transform: [{ translateY: headerTranslate }] }
          ]}
        >
          <Animated.Image
            style={[
              styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }]
              }
            ]}
            source={{ uri: defaultHeaderImage }}
          />
        </Animated.View>
        {shouldTitleRender ? (
          <Animated.View
            style={[
              styles.bar,
              {
                transform: [
                  { scale: titleScale },
                  { translateY: titleTranslate }
                ]
              }
            ]}
          >
            <Text style={titleStyle}>{title}</Text>
          </Animated.View>
        ) : null}
        <Animated.View
          style={[
            styles.leftIcon,
            {
              transform: [{ scale: titleScale }, { translateY: titleTranslate }]
            }
          ]}
        >
          {leftIcon}
        </Animated.View>
        <Animated.View
          style={[
            styles.rightIcon,
            {
              transform: [{ scale: titleScale }, { translateY: titleTranslate }]
            }
          ]}
        >
          {rightIcon}
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1
  },
  content: {
    flex: 1
  },
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    height: HEADER_MAX_HEIGHT
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: "cover"
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 52,
    height: hp("4%"),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000
  },
  leftIcon: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 52,
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Platform.OS === "ios" ? 10 : null,
    left: 0,
    right: "80%"
  },
  rightIcon: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 52,
    height: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Platform.OS === "ios" ? 10 : null,
    left: "80%",
    right: 0
  },
  title: {
    color: "white",
    fontSize: 18
  },
  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== "ios" ? HEADER_MAX_HEIGHT : 0
  },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withNavigation(ParallexHeader);
