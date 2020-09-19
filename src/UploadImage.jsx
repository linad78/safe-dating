import React, { Component } from 'react';
import axios from 'axios';


export default class UploadImage extends Component {
    constructor() {
        super();
        this.state = {
            images: [],
            selectedFile: null,
            loading: false,
            url: ''
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,
        });
    }


    fileChangedHandler = event => {
        const file = event.target.files[0];
        this.setState({ selectedFile: file });
    };

    uploadImage = event => {
        event.preventDefault();

        if (!this.state.selectedFile) return;

        this.setState({
            loading: true,
        });

        const formData = new FormData();
        formData.append(
            'image',
            this.state.selectedFile,
            this.state.selectedFile.name
        );

        axios.post('http://localhost:3000/upload', formData).then(({ data }) => {
            console.log('data from image upload', data);
            this.setState({
                loading: false,
                url: data.message.url
            });
            this.props.getImageUrl(this.state.url);
        }).catch(err => alert('some error occured in uploading your image!'));
    };

    render() {
        const image = (url, index) => (
            <img alt="" className="photo" key={`image-${index} }`} src={url} />
        );
        return (
            <div>
                <h1 className="App-title"> Photo </h1>

                <form method="post" onSubmit={this.uploadImage}>
                    <label className="label" htmlFor="gallery-image">
                        Choose an image to upload
          </label>
                    <input
                        type="file"
                        onChange={this.fileChangedHandler}
                        id="gallery-image"
                        accept=".jpg, .jpeg, .png"
                    />
                    <button type="submit">Upload!</button>
                </form>

                
            </div>
        )
    }
}