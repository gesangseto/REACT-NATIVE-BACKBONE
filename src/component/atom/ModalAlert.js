import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

function ModalAlert(props) {
  const {show, title, onConfirm, onClose} = props;

  const handleConfirmAlert = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  const handleCloseAlert = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <View>
      <AwesomeAlert
        show={show}
        showProgress={false}
        title={title ? title : 'Confirm'}
        message={
          props.message
            ? props.message
            : 'You are about to submit this transaction.\nThis operation cannot be undone.\nWould you like to continue?'
        }
        closeOnTouchOutside={false}
        // cancelButtonColor={colors.app.theme}
        // cancelButtonStyle={styles.button}
        // confirmButtonStyle={styles.button}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancel"
        confirmText="Yes"
        confirmButtonColor="#DD6B55"
        onDismiss={() => {
          // handleCloseAlert();
        }}
        onCancelPressed={() => {
          handleCloseAlert();
        }}
        onConfirmPressed={() => {
          handleConfirmAlert();
        }}
      />
    </View>
  );
}

export default React.memo(ModalAlert);

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 40,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
