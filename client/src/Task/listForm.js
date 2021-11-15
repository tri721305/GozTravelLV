import React, {Component} from 'react'

class MinhTri extends Component{

    render(){

        return(

            <div className="row">
                <div className="col-sm-4">
                    <div className="form-group ">
                        <label className="required">Date</label>
                        <input type="date"  name="date" id="date" className="form-control" placeholder="Enter Date" />
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group ">
                        <label className="required">Description</label>
                        <textarea name="description"  id="description" className="form-control"></textarea>
                    </div>
                </div>
            </div>

        )
    }
}