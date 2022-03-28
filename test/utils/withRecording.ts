import * as fs from "fs";
import nock from "nock";
import { saveRecordings } from "./saveRecordings";
import path from "path";

export const withRecording = async (
  dirname: string,
  name: string,
  cb: () => Promise<void>
) => {
  const recordingPath = path.join(dirname, "__tapes__", `${name}.json`);
  const recordingExists = await exists(recordingPath);

  if (recordingExists) {
    nock.disableNetConnect();
    nock.load(recordingPath);
  } else {
    nock.enableNetConnect();
    nock.recorder.rec({
      dont_print: true,
      output_objects: true,
      enable_reqheaders_recording: false,
    });
  }
  await cb();
  if (recordingExists) {
    nock.enableNetConnect();
  } else {
    await saveRecordings(dirname, name);
  }
};

const exists = (recordingPath: string): Promise<boolean> => {
  return new Promise<boolean>((resolve) => {
    fs.exists(recordingPath, (result) => {
      resolve(result);
    });
  });
};
