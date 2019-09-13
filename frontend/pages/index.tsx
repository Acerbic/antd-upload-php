import React from "react";
import { Row, Col } from "antd";
import { Upload, message, Button, Icon } from "antd";
import { UploadProps } from "antd/lib/upload/interface";

const props: UploadProps = {
    name: "files",
    // URL to the (PHP) upload endpoint
    action: "http://localhost:4000/",
    headers: {
        // authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            console.error(info);
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default () => {
    return (
        <Row type="flex" justify="center">
            <Col>
                <div id="content">
                    <Upload {...props}>
                        <Button>
                            <Icon type="upload" /> Click to Upload
                        </Button>
                    </Upload>
                </div>
            </Col>
            <style jsx>{`
                #content {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
            `}</style>
        </Row>
    );
};
