import { Directive, Input, HostListener, Inject, ElementRef, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { IConfig, ICssClassName } from '../interface';
import { DEFAULT_CONFIG } from '../constant';

@Directive({
  selector: '[ngxLoading]',
})
export class NgxloadingDirective implements OnDestroy {

  @Input('ngxLoading')
  fn: () => Observable<any>;

  private destory: Subscription;
  @HostListener('click')
  click(): void {
    this.onActive();
    this.onDisabled();
    try {
      this.destory = this.fn()
        .pipe(
          finalize(() => {
            this.onEnable();
          })
        )
        .subscribe(() => {
          this.onSuccess();
        }, (error) => {
          console.error(error);
          this.onError();
        }
        );
    } catch (error) {
      console.error(error);
      this.onError();
      this.onEnable();
    }
  }
  constructor(
    private elem: ElementRef,
    @Inject('config') private config: IConfig) {
  }

  get nativeElement(): HTMLInputElement {
    return this.elem.nativeElement;
  }

  get cssClassName(): ICssClassName {
    if (this.config && this.config.cssClassName) {
      return this.config.cssClassName;
    }
    return DEFAULT_CONFIG.cssClassName;
  }

  onActive(): void {
    const { active, success, error } = this.cssClassName;
    this.nativeElement.classList.add(active);
    this.nativeElement.classList.remove(success, error);
  }

  onSuccess(): void {
    const { active, success, error } = this.cssClassName;
    this.nativeElement.classList.add(success);
    this.nativeElement.classList.remove(active, error);
  }

  onError(): void {
    const { active, success, error } = this.cssClassName;
    this.nativeElement.classList.add(error);
    this.nativeElement.classList.remove(active, success);
  }

  onEnable(): void {
    this.nativeElement.disabled = false;
  }

  onDisabled(): void {
    this.nativeElement.disabled = true;
  }

  ngOnDestroy(): void {
    if (this.destory) {
      this.destory.unsubscribe();
    }
  }

}
