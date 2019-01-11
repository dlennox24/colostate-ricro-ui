import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import { CloseableDialog } from 'colostate-ricro-ui';
import React from 'react';

class CloseableDialogPage extends React.Component {
  state = {
    isOpen: false,
  };

  handleToggleOpen = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="outlined" onClick={this.handleToggleOpen}>
          Open Dialog
        </Button>
        <CloseableDialog
          header="Example CloseableDialog"
          onClose={this.handleToggleOpen}
          open={this.state.isOpen}
          keepMounted
        >
          <DialogContent>
            <Typography variant="body2" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis enim. In
              elementum, ex nec aliquet tincidunt, eros libero laoreet ipsum, vitae elementum enim
              metus et ex. Fusce porta a ligula a sollicitudin. Etiam pretium magna ut elit sodales
              finibus. Integer tristique, nulla non vestibulum tempus, leo eros auctor magna, vitae
              finibus dolor diam eu diam. Sed ultrices neque et molestie congue. Sed pellentesque
              egestas dui. Ut consectetur nulla vel maximus elementum. Nunc metus massa, consectetur
              sit amet laoreet id, dignissim vitae nibh. Donec elit magna, tincidunt et mauris vel,
              sodales consequat sapien. Morbi gravida hendrerit metus id rhoncus. Nam molestie
              viverra erat quis rutrum. Mauris tellus velit, viverra quis massa a, interdum
              elementum ligula. Mauris et luctus magna. Donec maximus vitae libero vitae molestie.
              Duis eget dictum arcu, id viverra magna.
            </Typography>
            <Typography variant="body2" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel mattis enim. In
              elementum, ex nec aliquet tincidunt, eros libero laoreet ipsum, vitae elementum enim
              metus et ex. Fusce porta a ligula a sollicitudin. Etiam pretium magna ut elit sodales
              finibus. Integer tristique, nulla non vestibulum tempus, leo eros auctor magna, vitae
              finibus dolor diam eu diam. Sed ultrices neque et molestie congue. Sed pellentesque
              egestas dui. Ut consectetur nulla vel maximus elementum. Nunc metus massa, consectetur
              sit amet laoreet id, dignissim vitae nibh. Donec elit magna, tincidunt et mauris vel,
              sodales consequat sapien. Morbi gravida hendrerit metus id rhoncus. Nam molestie
              viverra erat quis rutrum. Mauris tellus velit, viverra quis massa a, interdum
              elementum ligula. Mauris et luctus magna. Donec maximus vitae libero vitae molestie.
              Duis eget dictum arcu, id viverra magna.
            </Typography>
          </DialogContent>
        </CloseableDialog>
      </React.Fragment>
    );
  }
}

export default CloseableDialogPage;
