<template>
  <div class="schedule-page p-4 bg-white rounded shadow-sm">
    <h1 class="display-4 fw-bold mb-4 text-dark">{{ $t('schedule.title') }}</h1>
    <p class="lead text-secondary mb-5">{{ $t('schedule.tagline') }}</p>

    <div class="table-responsive mb-5">
      <table class="table table-bordered table-hover bg-white rounded shadow-sm">
        <thead class="table-dark">
          <tr>
            <th scope="col">{{ $t('schedule.time') }}</th>
            <th scope="col">{{ $t('schedule.monday') }}</th>
            <th scope="col">{{ $t('schedule.tuesday') }}</th>
            <th scope="col">{{ $t('schedule.wednesday') }}</th>
            <th scope="col">{{ $t('schedule.thursday') }}</th>
            <th scope="col">{{ $t('schedule.friday') }}</th>
            <th scope="col">{{ $t('schedule.saturday') }}</th>
            <th scope="col">{{ $t('schedule.sunday') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">9:00 AM - 10:00 AM</th>
            <td>{{ $t('classes.kids_wrestling_title') }}</td>
            <td>{{ $t('classes.bjj_title') }} (All Levels)</td>
            <td>{{ $t('classes.judo_title') }} (Beginner)</td>
            <td>{{ $t('classes.submission_grappling_title') }}</td>
            <td>Open Mat</td>
            <td>{{ $t('classes.kids_wrestling_title') }}</td>
            <td>Closed</td>
          </tr>
          <tr>
            <th scope="row">10:00 AM - 11:30 AM</th>
            <td>{{ $t('classes.bjj_title') }} (Advanced)</td>
            <td>{{ $t('classes.judo_title') }} (Advanced)</td>
            <td>{{ $t('classes.bjj_title') }} (All Levels)</td>
            <td>{{ $t('classes.bjj_title') }} (Advanced)</td>
            <td>{{ $t('classes.submission_grappling_title') }}</td>
            <td>{{ $t('classes.bjj_title') }} (All Levels)</td>
            <td>Closed</td>
          </tr>
          <tr>
            <th scope="row">6:00 PM - 7:00 PM</th>
            <td>{{ $t('classes.submission_grappling_title') }}</td>
            <td>{{ $t('classes.kids_wrestling_title') }}</td>
            <td>{{ $t('classes.bjj_title') }} (All Levels)</td>
            <td>{{ $t('classes.judo_title') }} (All Levels)</td>
            <td>Open Mat</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
          <tr>
            <th scope="row">7:00 PM - 8:30 PM</th>
            <td>{{ $t('classes.bjj_title') }} (All Levels)</td>
            <td>{{ $t('classes.submission_grappling_title') }}</td>
            <td>{{ $t('classes.bjj_title') }} (Advanced)</td>
            <td>{{ $t('classes.bjj_title') }} (All Levels)</td>
            <td>Closed</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="mt-5 p-4 bg-light rounded shadow-sm border-start border-4 border-warning text-start">
      <h2 class="h4 fw-bold mb-3 text-dark">{{ $t('schedule.notes_title') }}</h2>
      <ul class="list-unstyled">
        <li><i class="bi bi-check-circle-fill text-success me-2"></i>{{ $t('schedule.note_1') }}</li>
        <li><i class="bi bi-info-circle-fill text-info me-2"></i>{{ $t('schedule.note_2') }}</li>
        <li><i class="bi bi-calendar-check-fill text-primary me-2"></i>{{ $t('schedule.note_3') }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchedulePage',
}
</script>
