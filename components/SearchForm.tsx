import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import React, {useState} from "react";
import { Checkbox, CheckboxChangeParams } from 'primereact/checkbox';
interface Props {
    show: boolean,
     setShow:  React.Dispatch<React.SetStateAction<boolean>>

 }
const SearchForm:React.FC<Props> =({show,setShow})=> {
    const [searchValue, setSearchValue] = useState('');
    const [location, setLocation] = useState(false);
    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault()
    }
    const onLocationChange = ()=> {
        setLocation(true)
    }
    const hideModalhandler = () => {
        setShow(false);
    }
    return(
         <Dialog onHide={hideModalhandler} visible={show} dismissableMask={true} breakpoints={{'960px': '75vw', '640px': '100vw', '1200px': '50vw'}}
                     closable={false} draggable={false}>
                <h2 className="text-left text-600 text-primary-600 text-xl mt-0 pt-0 mb-2">Search</h2>
                <div className="text-sm mb-4 text-500 text-left">Search in consultancies titles, descriptions and tags</div>
                <form onSubmit={handleSubmit} className="p-fluid ">
                <div className="field flex">
                <span className="block p-input-icon-left">
                    <i className="pi pi-search"/>
                    <InputText className="" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                               placeholder="Search"/>
                </span>

                        </div>
                    <div className="col-12 mb-2">
    <Checkbox inputId="cb2" value="location" onChange={onLocationChange} checked={location}></Checkbox>
    <label htmlFor="cb2" className="ml-2 text-600 p-checkbox-label">Near my location</label>
</div>
                     <Button type="submit" label="Search" className="" />
                    </form>
            </Dialog>
    )
}
export default SearchForm