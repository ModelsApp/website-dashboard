export default (data: any): Campaign => {
  return {
    id: data._id,
    availableFrom: data.availableFrom,
    availableTill: data.availableTill,
    description: data.description,
    maxParticipantsCount: data.maxParticipantsCount,
    startAt: data.startAt,
    title: data.title,
    type: data.type
  };
};
