import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbnailStoreComponent } from './thumbnail-store.component';

describe('ThumbnailStoreComponent', () => {
  let component: ThumbnailStoreComponent;
  let fixture: ComponentFixture<ThumbnailStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbnailStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbnailStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
