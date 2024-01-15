import "./index.css"
import backIcon from "../../Images/back.png"
import OlxLogo from "../../Images/logo-black.png"
import uploadPhoto from "../../Images/photo-camera.png"
import profileImg from "../../Images/userprofile.png"
import { useNavigate } from "react-router-dom"
import { IoToggle } from "react-icons/io5";
import { postAdToDb, auth, getStorage, ref, uploadBytes, getDownloadURL } from "../../Config/Firebase"


function PostAd (){
    const navigate = useNavigate()

    var fileItem;
    var fileName;
    window.onSubmit = function() {
        const uid = auth.currentUser.uid
        const title = document.getElementById('adTitle').value
        const description = document.getElementById('description-box').value
        const amount = +document.getElementById('price').value
        const username = document.getElementById('userName').value
        const image = document.querySelector('.upload-photo').files[0];
        const image1 = document.querySelector('.upload-photo1').files[1];
        // image.file
        const ad = {
            title,
            description,
            amount,
            image,
            image1,
            username,
            uid
        }
        
        postAdToDb(ad)
        
    }
    
    window.getFiles = function(e) {
      fileItem = e.target.files[0];
      fileName = fileItem.name;
    }



    return(
        <div className="main-PostAd-div">
            <div className="postAd-header-div">
                <div className="back-icon-div">
                    <img src={backIcon} className="back-icon" onClick={()=> navigate('/')}/>
                </div>
                <div className="olx-logo-div">
                    <img src={OlxLogo} className="logo-icon"/>
                </div>
            </div>
            <div className="PostAd-form-div">
                <div className="postAd-heading-div">
                    <h3 className="postAd-heading">POST YOUR AD</h3>
                </div>
                <div className="postAdForm-div">
                    <div className="mainSelectedCategory-div">
                        <div className="selected-category-div">
                            <h2 className="all-heading">SELECTED CATEGORY</h2>
                        </div>
                        <div className="selected-category-div">
                            <h2 className="selectedCategory-heading">Mobile</h2>
                            <button className="changeCategory"><u>Change</u></button>
                        </div>
                    </div>
                    <div className="userForm-div">
                        <div className="main-form-div">
                            <div className="selected-category-div">
                                <h2 className="all-heading">INCLUDE SOME DETAILS</h2>
                            </div>
                            <div className="adTitle-div">
                                <div className="title-input-div">
                                    <label className="adTitle-label">Ad title</label>
                                    <input type="text" className="title-input" id="adTitle" required/>
                                </div>
                                <div className="title-div-p">
                                    <p className="title-p">Mention the key features of your item (e.g. brand, model, age, type)</p>
                                    <p className="title-p-count">0/70</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-form-div">
                            <div className="adTitle-div">
                                <div className="title-input-div">
                                    <label className="adTitle-label">Description</label>
                                    <textarea className="description-input" id="description-box" required></textarea>
                                </div>
                                <div className="title-div-p">
                                    <p className="title-p">Include condition, features and reason for selling</p>
                                    <p className="title-p-count">0/4096</p>
                                </div>
                            </div>
                        </div>
                        <div className="main-form-div">
                            <div className="adTitle-div">
                                <div className="title-input-div">
                                    <label className="adTitle-label">Brands</label>
                                    <select className="title-input select-options">
                                        <option>Popular Brand</option>
                                        <option>Apple</option>
                                        <option>Samsung</option>
                                        <option>Other Tablets</option>
                                        <option>Lenovo</option>
                                        <option>Amazon</option>
                                        <option>Others</option>
                                        <option>Apple</option>
                                        <option>Dany Tabs</option>
                                        <option>Huawei</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="main-form-div">
                            <div className="adTitle-div">
                                <div className="title-input-div">
                                    <label className="adTitle-label">Condition</label>
                                    <div className="condition-div">
                                        <div className="condition-tags">New</div>
                                        <div className="condition-tags">Open Box</div>
                                        <div className="condition-tags">Used</div>
                                        <div className="condition-tags">Refurbished</div>
                                        <div className="condition-tags">For Parts or Not Working</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="postAd-price-div">
                        <div className="price-div">
                            <h2 className="all-heading">SET A PRICE</h2>
                        </div>
                        <div className="adTitle-div">
                            <div className="title-input-div">
                                <label className="adTitle-label">Price</label>
                                <input type="text" required id="price" className="title-input"/>
                            </div>
                        </div>
                    </div>
                    <div className="postAd-upload-div">
                            <div className="adTitle-div">
                                <div className="price-div">
                                    <h2 className="all-heading">UPLOAD UP TO 20 PHOTOS</h2>
                                </div>
                                <div className="title-input-div">
                                    <div className="upload-photo-div">
                                        <div className="add-photo-div"><input type="file" className="upload-photo"/><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><input type="file" className="upload-photo1"/><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="add-photo-div"><img src={uploadPhoto} className="upload_photo"/></div>
                                        <div className="title-div-p">
                                            <p className="title-p">For the cover picture we recommend using the landscape mode.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="postAd-price-div">
                        <div className="price-div">
                            <h2 className="all-heading">YOUR AD'S LOCATION</h2>
                        </div>
                        <div className="adTitle-div">
                            <div className="title-input-div">
                                <label className="adTitle-label">Location</label>
                                <select className="title-input select-options" required>
                                        <option>Azad Kahmir, Pakistan</option>
                                        <option>Balochistan, Pakistan</option>
                                        <option>Islamabad Capital Territory, Pakistan</option>
                                        <option>Khyber Phaktunkhwa, Pakistan</option>
                                        <option>Northern Areas, Pakistan</option>
                                        <option>Punjab, Pakistan</option>
                                        <option>Sindh, Pakistan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="postAd-price-div">
                        <div className="price-div">
                            <h2 className="all-heading">REVIEW YOUR DETAILS</h2>
                        </div>
                        <div className="adTitle-div">
                            <div className="title-input-div">
                                <div className="postAd-userInfo-div">
                                    <div className="postAd-profile-div">
                                        <img src={profileImg} className="postAd-profile-img"/>
                                    </div>
                                    <div className="postAd-profile-info-div">
                                        <div className="title-input-div">
                                            <label className="adTitle-label">Name</label>
                                            <input type="text" required className="title-input"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="postAd-phoneNumber-div">
                                    <p className="phone-number">Your phone number</p>
                                    <p>+921234567895</p>
                                </div>
                                <div className="postAd-phoneNumber-div">
                                    <p className="show-phoneNumber">Show my phone number in ads</p>
                                    <IoToggle size={30}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-form-div">
                        <div className="post-btn-div">
                            <button className="Post-btn" onclick={onSubmit()}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostAd