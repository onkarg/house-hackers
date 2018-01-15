import React, { Component } from "react";
import Navbar from './Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Home Component</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo
            ac nisl pharetra feugiat sed quis felis. Nullam et turpis et libero
            elementum sollicitudin. Phasellus tincidunt vel nulla a aliquam. Proin
            dolor elit, interdum vitae pharetra et, posuere at enim. Fusce a nisl
            erat. Vestibulum velit nibh, pulvinar sed commodo eu, finibus sit amet
            eros. Nulla et rutrum est, in ullamcorper justo. Phasellus eget quam
            convallis, molestie felis ac, bibendum turpis. Praesent velit diam,
            dignissim at arcu eget, dignissim venenatis ante. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Sed finibus lectus mauris, a pharetra tellus rhoncus sed. Donec
            at consequat elit. Pellentesque sodales libero non purus porta
            aliquam. Fusce fringilla sagittis dignissim. Nulla eu ultricies ante.
            Sed porttitor mi a porttitor elementum.
          </p>

          <p>
            Vestibulum neque ligula, vulputate sed euismod eget, pulvinar ornare
            augue. In commodo quis nunc sed ullamcorper. Integer dui dui, congue a
            consequat a, fermentum et ante. Praesent nulla quam, feugiat vitae
            tortor sed, dignissim porttitor nunc. Nullam ac varius massa.
            Vestibulum varius arcu in gravida viverra. Suspendisse in vehicula
            elit, sed scelerisque nunc. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Donec placerat quis
            dolor tempus faucibus. Mauris odio leo, sodales et molestie et,
            facilisis eget massa. Ut blandit lectus at rutrum vehicula. Sed porta,
            metus in pharetra bibendum, turpis lorem suscipit nunc, et porta elit
            ex a ex. Fusce egestas nisl a tellus rhoncus interdum.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
