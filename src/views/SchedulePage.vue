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
            <th scope="row">10:00 AM - 11:00 AM</th>
            <td colspan="7" class="submission-grappling-class">{{ $t('classes.submission_grappling_title') }}</td>
          </tr>
          <tr>
            <th scope="row">11:00 AM - 12:00 PM</th>
            <td colspan="7" class="open-mat-class">{{ $t('schedule_classes.open_mat') }}</td>
          </tr>
          <tr>
            <th scope="row">12:00 PM - 4:00 PM</th>
            <td colspan="7" class="strength-training-class">{{ $t('schedule_classes.strength_conditioning') }}</td>
          </tr>
          <tr>
            <th scope="row">4:00 PM - 5:00 PM</th>
            <td colspan="7" class="wrestling-class">{{ $t('schedule_classes.wrestling') }}</td>
          </tr>
          <tr>
            <th scope="row">5:00 PM - 6:30 PM</th>
            <td colspan="7" class="judo-class">{{ $t('classes.judo_title') }}</td>
          </tr>
          <tr>
            <th scope="row">6:30 PM - 8:00 PM</th>
            <td colspan="7" class="bjj-class">{{ $t('classes.bjj_title') }}</td>
          </tr>
          <tr>
            <th scope="row">8:00 PM - 9:00 PM</th>
            <td colspan="7" class="submission-grappling-class">{{ $t('classes.submission_grappling_title') }}</td>
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

<style scoped>
.submission-grappling-class {
  background-color: #e0f7fa; /* Light Cyan */
}

.open-mat-class {
  background-color: #fffde7; /* Light Yellow */
}

.strength-training-class {
  background-color: #f3e5f5; /* Light Purple */
}

.wrestling-class {
  background-color: #ffe0b2; /* Light Orange */
}

.judo-class {
  background-color: #e8f5e9; /* Light Green */
}

.bjj-class {
  background-color: #e3f2fd; /* Light Blue */
}
</style>
