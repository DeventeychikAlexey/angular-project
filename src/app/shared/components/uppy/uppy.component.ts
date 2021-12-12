import { Component, OnInit } from '@angular/core';
import Uppy from '@uppy/core';
import DropTarget from '@uppy/drop-target';
import XHRUpload from '@uppy/xhr-upload';
import Dashboard from '@uppy/dashboard';
import { environment } from '@environment/environment';
import { UppyService } from '@core/services/uppy.service';

@Component({
  selector: 'app-uppy',
  templateUrl: './uppy.component.html',
  styleUrls: ['./uppy.component.scss'],
})
export class UppyComponent implements OnInit {
  constructor(private uppyService: UppyService) {}

  ngOnInit() {
    const uppy = new Uppy({
      autoProceed: false,
      allowMultipleUploads: false,
      restrictions: {
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ['image/*'],
      },
    });

    uppy.use(Dashboard, {
      inline: true,
      target: '.DashboardContainer',
      width: 1920,
      height: 320,
      showProgressDetails: false,
      disableInformer: true,
      disableStatusBar: true,
      // theme: this.theme
    });

    uppy.use(XHRUpload, {
      endpoint: `${environment.baseURI}user/image`,
      method: 'post',
      formData: true,
      fieldName: 'image',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    uppy.use(DropTarget, { target: document.body });

    this.uppyService.uppy = uppy;
  }
}
