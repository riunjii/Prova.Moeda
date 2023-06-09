import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeComponent } from './escape.component';

describe('EscapeComponent', () => {
    let component: EscapeComponent;
    let fixture: ComponentFixture<EscapeComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EscapeComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EscapeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
