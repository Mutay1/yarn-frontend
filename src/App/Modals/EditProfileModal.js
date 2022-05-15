import React, {useState} from 'react'
import {
    Modal,
    ModalBody,
    TabContent,
    TabPane,
    Nav,
    Alert,
    NavItem,
    NavLink,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    ModalHeader,
    Input,
    InputGroup,
} from 'reactstrap'
import * as FeatherIcon from 'react-feather'
import {connect} from "react-redux"
import axios from "axios"
import classnames from 'classnames'
import {getProfile} from "../../Store/Actions/authAction"
import Avatar from "../../utils/Avatar"
import Loader from "../../utils/Loader"
import Error from "../../utils/Error"

function EditProfileModal(props) {
    const [activeTab, setActiveTab] = useState('1');
    const [status, setStatus] = useState(props.profile.status);
    const [about, setAbout] = useState(props.profile.about);
    const [city, setCity] = useState(props.profile.city);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)
    const [selectedFile, setSelectedFile] = React.useState(null);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const submitForm = async(event) =>{
        event.preventDefault()
        setSuccess(false)
        setLoading(true)
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        formData.append("status", status);
        formData.append("about", about);
        formData.append("city", city);
        try {
            await axios({
                method: "post",
                url: "http://192.168.43.236:8000/users/profile",
                data: formData,
                headers: { "Content-Type": "multipart/form-data", Authorization: props.token},
            });
            props.getProfile()
            setSuccess(true)
            setError(null)
            setLoading(false)
        } catch(error) {
            setError(error)
            setSuccess(null)
            setLoading(false)
        }
      }

    return (
        <div>
            <Modal isOpen={props.modal} toggle={props.toggle} centered className="modal-dialog-zoom">
                <ModalHeader toggle={props.toggle}>
                    <FeatherIcon.Edit2 className="mr-2"/> Edit Profile
                </ModalHeader>
                <ModalBody>
                {success ? <Alert color="success">Profile successfully updated.</Alert> : null}
                    <Error error={error}/>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '1'})}
                                onClick={() => {
                                    toggle('1');
                                }}
                            >
                                Personal
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: activeTab === '2'})}
                                onClick={() => {
                                    toggle('2');
                                }}
                            >
                                About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Form onSubmit={(e) => submitForm(e)}>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <FormGroup>
                                    <Label for="fullname">Fullname</Label>
                                    <InputGroup>
                                        <Input value={props.profile.firstName + " " + props.profile.lastName} readOnly/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="fullname">Status</Label>
                                    <InputGroup>
                                        <Input value={status} onChange={(e) => setStatus(e.target.value)}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="avatar">Avatar</Label>
                                    <InputGroup>
                                            <div>
                                                <Avatar source={props.profile.avatar}/>
                                            </div>
                                            <Input type="file" accept="image/png, image/jpeg" onChange={(e) => setSelectedFile(e.target.files[0])}/>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="city">City</Label>
                                    <InputGroup>
                                        <Input type="text" onChange={(e) => setCity(e.target.value)} value={city} placeholder="Ex: Columbia"/>
                                    </InputGroup>
                                </FormGroup>
                            </TabPane>
                            <TabPane tabId="2">
                                <FormGroup>
                                    <Label for="about">Write a few words that describe you</Label>
                                    <Input type="textarea" onChange={(e) => setAbout(e.target.value)} value={about}/>
                                </FormGroup>
                            </TabPane>
                        </TabContent>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={(e) => submitForm(e)}>{loading ? <Loader/> : "Submit"}</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      profile : state.auth.profile,
      token: state.auth.token

    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getProfile: () => dispatch(getProfile())
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditProfileModal)
