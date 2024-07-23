import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiConnect } from './api.service';
import { environment } from '../environment';

describe('ApiConnect', () => {
  let service: ApiConnect;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiConnect]
    });

    service = TestBed.inject(ApiConnect);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should call getZenklub and return the expected data', () => {
    const mockResponse = {};
    service.getZenklub().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/api/zenklub`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call GetTotalSessionsByDepartment and return the expected data', () => {
    const mockResponse = {};
    service.GetTotalSessionsByDepartment().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/dep`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getCID and return the expected data', () => {
    const mockResponse = {};
    service.getCID().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/api/cid`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getOrganization and return the expected data', () => {
    const mockResponse = {};
    service.getOrganization().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/api/organization`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getStiba and return the expected data', () => {
    const mockResponse = {};
    service.getStiba().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/api/stiba`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getGptwEngage and return the expected data', () => {
    const mockResponse = {};
    service.getGptwEngage().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/engajamento`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getCertificateQuantity and return the expected data', () => {
    const mockResponse = {};
    service.getCertificateQuantity().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/certificate_quantity`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getAppointmentsQuantity and return the expected data', () => {
    const mockResponse = {};
    service.getAppointmentsQuantity().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/appointments_quantity`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getDaysAppointment and return the expected data', () => {
    const mockResponse = {};
    service.getDaysAppointment().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/days_appointment`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getAppointmentSpecialty and return the expected data', () => {
    const mockResponse = {};
    service.getAppointmentSpecialty().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/appointment_specialty`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should call getCalendar and return the expected data', () => {
    const mockResponse = {};
    service.getCalendar().subscribe(response => {
      expect(response.body).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(`${environment.BASE_URL}/event_occurrences`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
