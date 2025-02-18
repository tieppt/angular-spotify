import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'as-media-summary',
  templateUrl: './media-summary.component.html',
  styleUrls: ['./media-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MediaSummaryComponent {
  @Input() type: 'Album' | 'Playlist' | undefined;
  @Input() title: string | undefined;
  @Input() description!: string | null;
  @Input() artist: string | undefined;
  @Input() trackCount: number | undefined;
  @Input() likesCount: number | undefined;
  @Input() imageUrl: string | undefined;
}
