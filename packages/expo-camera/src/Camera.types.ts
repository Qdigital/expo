import { ViewProps } from 'react-native';
import { PermissionResponse, PermissionStatus } from 'unimodules-permissions-interface';

export type PictureOptions = {
  quality?: number;
  base64?: boolean;
  exif?: boolean;
  skipProcessing?: boolean;
  onPictureSaved?: Function;
  // internal
  id?: number;
  fastMode?: boolean;
};

export type RecordingOptions = {
  maxDuration?: number;
  maxFileSize?: number;
  quality?: number | string;
  mute?: boolean;
  mirror?: boolean;
};

export type CapturedPicture = {
  width: number;
  height: number;
  uri: string;
  base64?: string;
  exif?: any;
};

export type MountError = { message: string };

export type BarCodeScanningResult = { type: string; data: string };

export type FaceDetectionResult = { faces: any[] };

export type Props = ViewProps & {
  zoom?: number;
  ratio?: string;
  focusDepth?: number;
  type?: number | string;
  onCameraReady?: Function;
  useCamera2Api?: boolean;
  flashMode?: number | string;
  whiteBalance?: number | string;
  autoFocus?: string | boolean | number;
  pictureSize?: string;
  videoStabilizationMode?: number;
  onMountError?: (event: MountError) => void;
  barCodeScannerSettings?: object;
  onBarCodeScanned?: (scanningResult: BarCodeScanningResult) => void;
  faceDetectorSettings?: object;
  onFacesDetected?: (faces: FaceDetectionResult) => void;
};

export type NativeProps = {
  pointerEvents?: any;
  style?: any;
  ref?: Function;
  onCameraReady?: Function;
  onMountError?: ({ nativeEvent }: { nativeEvent: MountError }) => void;
  onBarCodeScanned?: ({ nativeEvent }: { nativeEvent: BarCodeScanningResult }) => void;
  onFacesDetected?: ({ nativeEvent }: { nativeEvent: FaceDetectionResult }) => void;
  onFaceDetectionError?: Function;
  onPictureSaved?: Function;
  type?: number | string;
  flashMode?: number | string;
  autoFocus?: string | boolean | number;
  focusDepth?: number;
  zoom?: number;
  whiteBalance?: number | string;
  pictureSize?: string;
  barCodeScannerSettings?: object;
  barCodeScannerEnabled?: boolean;
  faceDetectorEnabled?: boolean;
  faceDetectorSettings?: object;
  // Android
  ratio?: string;
  useCamera2Api?: boolean;
};

export { PermissionResponse, PermissionStatus };
